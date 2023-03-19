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

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (info) => {
    app.listen(PORT,() => {
        console.log("info", info)
        console.log('i am listening')
    })    
  })