import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
app.use(express.static("public"));


app.get ("/" , async(req , res) =>{

try{
  const response = await axios.get("https://v2.jokeapi.dev/joke/Dark?type=single&amount=1");

    const jokeData = response.data.joke;
    res.render("index.ejs" , { joke:jokeData});
}
catch(error){
    console.log("Error occurred:" + error);
}
});


app.listen(port , ()=>{
console.log("Listening in port:" + port);
});