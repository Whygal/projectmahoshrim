import express, { json } from "express";
import cors from "cors";
import { set, Schema, model, connect } from "mongoose";
import { config } from "dotenv";
import mongoose from "mongoose";

config();

const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env
const app = express()

app.use(json())
app.use(cors())
set('strictQuery', true)

const QuestionsSchema = new Schema({

  q:{
    type: String,
    require: true
  },

  date:{
    type: Date,
    default: Date.now()
  }

})

const Q = model('Q', QuestionsSchema);

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

app.get('/api/getOneQ', async(req, res)=> {
    try{
            const Question = await Q.find({})
            res.status(200).send(Question)
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