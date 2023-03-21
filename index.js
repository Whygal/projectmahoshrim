import express, { json } from "express";
import cors from "cors";
import { set, Schema, model } from "mongoose";
import { config } from "dotenv";
import mongoose from "mongoose";
import { allowedUpdate } from "./allowedUpdate.js";
import { createToken, validateToken } from './JWT.cjs'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
// import { DummyQA } from "./allowedUpdate.js";

config();

const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env
const app = express()

app.use(json())
app.use(cors())
set('strictQuery', true)

const user = new mongoose.Schema({
  username:{
      type: String,
      required:true,
      unique:true,
  },
  password:{
      type:String,
      required:true,
  },
  email:{
      type:String,
      required:true,
      unique:true,
  },
  dateCreated:{
      type: Date,
      default: Date.now(),
  }
})

const blockedUser = new Schema({

    userEmail:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
      }

})

const QuestionsSchema = new Schema({

  q:{
    type: String,
    required: true,
  },

  agreeToPublish:{
    type: Boolean,
    default: false,
  },

  date:{
    type: Date,
    default: Date.now()
  },

})

const AnswerSchema = new Schema({

  a:{
    type: String,
    required: true
  },

  q_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Q",
    required: true
  },
  
  date:{
    type: Date,
    default: Date.now()
  }

})

const TipsSchema = new Schema({

    tip:{    
    type: String,
    required: true
    },

    date:{
        type: Date,
        default: Date.now()
      }
})

//models

const Q = model('Q', QuestionsSchema);
const A = model('A', AnswerSchema);
const Users = model('Users', user);
const AllTips = model("Tips", TipsSchema)

//routes

// questions

app.post('/api/addOneQ', async(req, res)=> {
  try{
          const Question = req.body.q
          const NewQ = new Q({
            q:Question
          })
          await NewQ.save()
          res.status(200).send(NewQ)
  }catch(e){
      console.log(e)
      res.status(500).send({message:e})
  }
})

app.get('/api/getAllQ', async(req, res)=> {
    try{
            const Questions = await Q.find({})
            res.status(200).send(Questions)
    }catch(e){
        console.log(e)
        res.status(500).send({message:e})
    }
  })
 
  app.get('/api/getOneQ/:id', async(req, res)=> {
    try{
            const { id } = req.params
            const Question = await Q.findOne({id: id})
            console.log(Question)
            res.status(200).send(Question)
    }catch(e){
        console.log(e)
        res.status(500).send({message:e})
    }
  })

  app.post('/api/addAllQ', async(req, res)=> {
    try{
            const Questions = Q.insertMany(req.body) 
            res.status(200).send(Questions)
    }catch(e){
        console.log(e)
        res.status(500).send({message:e})
    }
})

app.put('/api/Q/updateQ/:id', async (req,res) => {
  const { id } = req.params
  const updates = Object.keys(req.body);
  const isValidOperation = updates.every((update) =>
  allowedUpdate.includes(update)
  );
  
  if (!isValidOperation) {
      res.status(400).send({message: "Invalid updates"})
  } else{
  
  try {
      const updateQ = await Q.findOne({_id: id})
    if (!updateQ) {
      res.status(404).send({message: "Q does not exist"})
    }
    updates.forEach((update) => (updateQ[update] = req.body[update]));
    await updateQ.save();
    res.status(200).send(updateQ)
  } catch (e) {
      console.log(e)
      res.status(500).send({message:e})
       }
      }
      })

app.delete('/api/delete/deleteOneQ/:id', async (req,res) => {
  try{
      const { id } = req.params
      const deletedQ = await Q.findOneAndDelete({id: id})
      if(!deletedQ){
          res.status(404).send({message:"no such todo with the specified id"})
      }
      res.status(200).send(deletedQ)

  } catch(e){
      console.log(e)
      res.status(500).send({message:e})

  }
})

//A

app.post('/api/addOneA', async(req, res)=> {
  try{
          const answer = req.body.a
          const q_id = req.body.q_id
          const NewA = new A({
            a:answer,
            q_id:q_id
          })
          await NewA.save()
          res.status(200).send(NewA)
          console.log(NewA)
  }catch(e){
      console.log(e)
      res.status(500).send({message:e})
  }
})

app.get('/api/getAllA', async(req, res)=> {
  try{
          const Answers = await A.find({}).populate("q_id")
          res.status(200).send(Answers)
  }catch(e){
      console.log(e)
      res.status(500).send({message:e})
  }
})

app.get('/api/getOneAByQ/:id', async(req, res)=> {
  try{
          const { id } = req.params
          const Answer = await A.findOne({q_id: id}).execPopulate()
          console.log(Answer)
          res.status(200).send(Answer)
  }catch(e){
      console.log(e)
      res.status(500).send({message:e})
  }
})

app.delete('/api/delete/deleteOneA/:id', async (req,res) => {
  try{
      const { id } = req.params
      const deletedA = await A.findOneAndDelete({id: id})
      if(!deletedA){
          res.status(404).send({message:"no such todo with the specified id"})
      }
      res.status(200).send(deletedA)

  } catch(e){
      console.log(e)
      res.status(500).send({message:e})

  }
})

//users

app.post('/Register', (req,res)=> {
  const username = req.body.username
  const password = req.body.password
  const email = req.body.email    

  bcrypt.hash(password, 10).then((hash)=>{
      Users.create({
          username: username,
          password: hash,
          email: email
      }).then(()=> {
          res.status(200).send({response})
          res.json("USER REGISTERED");
      }).catch((err)=> {
          if(err)
          res.status(400).json({message: "This Username Is Already Used"});
      })
  })
})

app.post('/Login', async(req,res)=> {
const {username, password} = req.body;
const userLogged = await Users.findOne({username});
if(!userLogged)
res.status(400).json({error: "User Dosen't Exist"});
const dbPassword = userLogged.password;
bcrypt.compare(password, dbPassword).then((match)=> {
    if(!match){
        res.status(400).json({error: "Wrong username and password combination"});
    }else{
        const accessToken = createToken(userLogged);
        res.cookie("access-token", accessToken, {
            maxAge: 60*60*10
        })
        res.status(200).send({username:userLogged.username, _id:userLogged._id, email:userLogged.email})
    }
})
});
app.get("/Login", function (req, res) {
res.render("/Login");
});

app.get("/profile", validateToken, (req,res)=> {
res.json("you are authenticated")
})

//Tips

app.post("/api/postTip", async(req,res)=>{
    try{
        const oneTip = req.body.tip
        const createTip = new AllTips({
            tip:oneTip
        })
        await createTip.save()
        res.status(200).send(createTip)
}catch(e){
    res.status(500).send({message:e})
}  
})

app.get("/api/getTips", async(req,res)=>{
    try{
        const Tip = await AllTips.find({})
        res.status(200).send(Tip)    
    }catch(e){
        res.status(500).send({message:e})
    }  
    })

    app.put('/api/Tips/updateTip/:id', async (req,res) => {
      const { id } = req.params
      const updates = Object.keys(req.body);
      const isValidOperation = updates.every((update) =>
      allowedUpdate.includes(update)
      );
      
      if (!isValidOperation) {
          res.status(400).send({message: "Invalid updates"})
      } else{  
      try {
          const updateTip = await AllTips.findOne({_id: id})
        if (!updateTip) {
          res.status(404).send({message: "does not exist"})
        }
        updates.forEach((update) => (updateTip[update] = req.body[update]));
        await updateTip.save();
        res.status(200).send(updateTip)
      } catch (e) {
          console.log(e)
          res.status(500).send({message:e})
           }
          }
          })

          app.delete('/api/delete/deleteOneTip/:id', async (req,res) => {
            try{
                const { id } = req.params
                const deletedTips = await AllTips.findOneAndDelete({id: id})
                if(!deletedTips){
                    res.status(404).send({message:"no such todo with the specified id"})
                }
                res.status(200).send(deletedTips)
            } catch(e){
                console.log(e)
                res.status(500).send({message:e})
            }
          })


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (info) => {
    app.listen(PORT,() => {
        console.log("info", info)
        console.log('i am listening')
    })    
  })