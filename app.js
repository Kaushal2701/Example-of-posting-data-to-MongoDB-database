const express = require("express");
const app = express();
const url = "mongodb+srv://slLAB11:1234@cluster0.yaxj8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoose = require('mongoose');
const myschema = require("./schema");

mongoose.connect(url).then(()=>console.log("Connected to db"))

app.use(express.json())

app.post("/new-post",async(req,res)=>{
    const mytitle = req.body.title;
    const myauthor = req.body.author;
    const mycontent = req.body.content;

    try{
        const newTodo = new myschema(
            {
                title : mytitle,
                author : myauthor
            }
        )
        const savedTodo = await newTodo.save()
        res.json(
            {"message":"Todo is saved","data":savedTodo}
        )
    }catch(err){
        res.json(err);
    }
})

app.use("/",(req,res)=>{
    //res.send("Hello from express")
    res.json(
        {"message":"Express started"}
    )
})

app.listen(3000, ()=>console.log("Express started"))