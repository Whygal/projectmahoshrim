import express, { json } from "express";
import cors from "cors";
import { set, Schema, model } from "mongoose";
import { config } from "dotenv";
import mongoose from "mongoose";
import { allowedUpdate } from "./allowedUpdate.js";
// import { DummyQA } from "./allowedUpdate.js";

config();

const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env
const app = express()

app.use(json())
app.use(cors())
set('strictQuery', true)

const QuestionsSchema = new Schema({

  q:{
    type: String,
    require: true,
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
    require: true
  },

  q_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "QuestionsSchema",
    strictPopulate:false,
    require: true
  },
  
  date:{
    type: Date,
    default: Date.now()
  }

})

const Q = model('Q', QuestionsSchema);

const A = model('A', AnswerSchema);

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
      res.status(404).send({message: "todo does not exist"})
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

app.post('/api/addOneA', async(req, res)=> {
  try{
          const answer = req.body.a
          const q_id = req.body.q_id
          const NewA = new A({
            answer:answer,
            q_id:q_id,
          })
          await NewA.save()
          res.status(200).send(NewA)
  }catch(e){
      console.log(e)
      res.status(500).send({message:e})
  }
})

app.get('/api/getAllA', async(req, res)=> {
  try{
          const Answers = await A.find({})
          res.status(200).send(Answers)
  }catch(e){
      console.log(e)
      res.status(500).send({message:e})
  }
})

app.get('/api/getOneA/:id', async(req, res)=> {
  try{
          const { id } = req.params
          const Answer = await Q.findOne({id: id}).populate("q_id")
          console.log(Answer)
          res.status(200).send(Answer)
  }catch(e){
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