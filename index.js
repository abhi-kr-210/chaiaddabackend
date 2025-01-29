
require('dotenv').config();
const express=require('express');
const app=express();
const port=process.env.PORT||5000;
// app.use(express.json()); 
const data={
    "my name":"abhishek",
    "my age":22,
    "my country":"india",
    "my city":"delhi"
}
app.get('/',(req,res)=>{
    res.send({"my name":"abhishek"});
});
app.get('/login',(req,res)=>{
    res.send('<h1 >Hi! welocme to Abhi_Academy</h1>')
});
app.get('/data',(req,res)=>{
    res.json(data);
})
app.listen(port,()=>{
    console.log(`server is started at port ${port}`);
});
