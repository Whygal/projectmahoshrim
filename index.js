const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();

const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env
const app = express()

app.use(express.json())
app.use(cors())
mongoose.set('strictQuery', true)

const QuestionsSchema = new mongoose.Schema({
  q:{
    type: String,
    require: true
  },
  date:{
    type: Date,
    default: Date.now()
  }

})

const Q = mongoose.model('Q', QuestionsSchema);

app.post('/api/addOneQ', async(req, res)=> {
  try{
          const Question = req.body.q
          const NewQ = new Q({
            q:Question
          })
          await NewQ.save()
          res.status(200).send(Q)
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