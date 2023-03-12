import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { createToken, validateToken } from './JWT.cjs'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
mongoose.set('strictQuery', true)

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
const Users = mongoose.model('Users', user);

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
            res.json("USER REGISTERED");
        }).catch((err)=> {
            if(err)
            res.status(400).json({message: "This Username Is Already Used"});
        })
    })
    //const newUser = new Users({username: user.username, password: user.password, email: user.email})
    //newUser.save()
    //console.log(newUser);
    
})

app.post('/Login', async(req,res)=> {
    // const username = req.body.username
    // const password = req.body.password
// try{
//     const existUser = await Users.findOne({username: req.body.username});
//     if(existUser){
//         const result = req.body.password === user.password
//         if (result) {
//             res.render("secret");
//           } else {
//             res.status(400).json({ error: "password doesn't match" });
//           }
//         } else {
//           res.status(400).json({ error: "User doesn't exist" });
//         }
// }catch (error) {
//             res.status(400).json({ error });
//           }
    

    //     if(!existUser){
    //         res.send({error: err})
    //     } if(result.length > 0){
    //         res.send(result)
    //     }else{
    //         res.send({message: "wrong combination"})
    //     }
    // })

    
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

mongoose.connect('mongodb://127.0.0.1:27017/Users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



app.listen(8000, ()=>{
    console.log("i am listening in port 8000");
})