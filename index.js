import express, { json } from "express";
import cors from "cors";
import { set, Schema, model } from "mongoose";
import { config } from "dotenv";
import mongoose from "mongoose";
import { allowedUpdate } from "./allowedUpdate.js";
import { createToken, validateToken } from './JWT.cjs'
import bcrypt from 'bcrypt'


config();
const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME, KEY } = process.env
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
    isManager:{
        type:Boolean,
        default:false
    },
    dateCreated:{
        type: Date,
        default: Date.now(),
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

const YtSchema = new Schema({
  videoId:{
    type: String,
    required:true
  },
  tn:{
    type: Object, 
    required: true
  },
  title:{
    type: String, 
    required:true
  },
  date:{
    type: Date,
    default: Date.now()
  }
})

const Users = mongoose.model('Users', user);
const Q = model('Q', QuestionsSchema);
const A = model('A', AnswerSchema);
const Tips = model("Tips", TipsSchema)
const Yt = model("Yt", YtSchema)

app.post('/Register', (req,res)=> {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    bcrypt.hash(password, 10).then((hash)=>{
        Users.create({
            username: username,
            password: hash,
            email: email
        })
        .then(()=> {
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
    res.status(400).json({error: "User Doesn't Exist"});
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

app.get('/api/getAllUsers', async(req, res)=> {
  try{
          const users = await Users.find({})
          res.status(200).send(users)
  }catch(e){
      console.log(e)
      res.status(500).send({message:e})
  }
})

 //Q

app.post('/api/addOneQ', async(req, res)=> {
    try{
            const Question = req.body.q
            const Checkbox = req.body.agreeToPublish
            const NewQ = new Q({
              q:Question,
              agreeToPublish: Checkbox
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

    app.get('/api/getQBySearch/:search', async(req,res)=> {
      try{
        const {search} = req.params
        const qSearch = await Q.find({q: {$regex: `${search}`}})
        console.log(qSearch);
        res.status(200).send(qSearch)
      }catch(e){
        console.log(e)
        res.status(500).send({message:e})
    }})
   
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

  app.put('/api/A/updateA/:id', async (req,res) => {
    const { id } = req.params
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every((update) =>
    allowedUpdate.includes(update)
    );
    
    if (!isValidOperation) {
        res.status(400).send({message: "Invalid updates"})
    } else{
    
    try {
        const updateA = await A.findOne({_id: id})
      if (!updateA) {
        res.status(404).send({message: "A does not exist"})
      }
      updates.forEach((update) => (updateA[update] = req.body[update]));
      await updateA.save();
      res.status(200).send(updateA)
    } catch (e) {
        console.log(e)
        res.status(500).send({message:e})
         }
        }
        })

        //tips

        app.post('/api/postTip', async(req, res)=> {
          try{
            const tip = req.body.tip
                  const NewTip = new Tips({
                    tip:tip
                  })
                  await NewTip.save()
                  res.status(200).send(NewTip)
          }catch(e){
              console.log(e)
              res.status(500).send({message:e})
          }
        })
        
        app.get('/api/getTips', async(req, res)=> {
            try{
                    const allTips = await Tips.find({})
                    res.status(200).send(allTips)
            }catch(e){
                console.log(e)
                res.status(500).send({message:e})
            }
          })

          app.delete('/api/delete/deleteOneTip/:id', async (req,res) => {
            try{
                const { id } = req.params
                const deletedTip = await Tips.findOneAndDelete({id: id})
                if(!deletedTip){
                    res.status(404).send({message:"no such todo with the specified id"})
                }
                res.status(200).send(deletedTip)
            } catch(e){
                console.log(e)
                res.status(500).send({message:e})
          
            }
          })


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err)=>{
    app.listen(PORT, () => {
    console.log("err", err)
    console.log("i am listening");
    })    
  })