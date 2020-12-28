const express = require("express");
const app = express();

const loggerMiddleware =(req,res, next)=>{
    console.log("logged "+req.url);
    next();
}
app.use(loggerMiddleware);
app.get("/",(req,res)=>{
    res.send("this is exprss app");
})
app.get("/contact",(req,res)=>{
    res.send("<h1>Welcome to conatct page </h1>");
})
app.listen(3000,()=>{
    console.log("app started at port 3000");
})