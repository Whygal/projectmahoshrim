const {sign, verify} = require('jsonwebtoken')
const createToken = ((user)=> {
    const accessTokens = sign({username: user.username, id: user.id}, "jwtsecretplschange");
    return accessTokens
})

const validateToken = (req, res, next)=> {
    const accessToken = req.cookies["access-token"];
    if(!accessToken)
    return res.status(400).json({error: "User Not Authenticated!"});
try{
    const validToken = verify(accessToken, "jwtsecretplschange")
    if(validToken){
        req.authenticated = true
        return next()
    }
}catch(err){
return res.status(400).json({error: err});
}}
module.exports = {createToken, validateToken}