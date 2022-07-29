const express=require("express");
const app=express();
const path=require('path');
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))

app.get('/',(req,res)=>{
	//res.send("Welcome to the homepage");
	res.render('home')
})
app.get('/rand',(req,res)=>{
	let num=Math.floor(Math.random()*10);
	res.render('random',{rand:num});
})
app.get('/cats',(req,res)=>{
	const cats=['Blue','Rocket','Monty','Stephanie','Winston'];
	res.render('cats',{cats});
})
app.get('/r/:subreddit',(req,res)=>{
	let {subreddit}=req.params;
	res.render('subreddit',{subreddit});
})
app.listen(3000,()=>{
	console.log("Listening on port 3000");
})