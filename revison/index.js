const express=require("express");
const app=express();
//console.log(app);
// app.use((req,res)=>{
// 	console.log("We got a new request");
// 	res.send("Hello we got your request! this is the response");
// })
// app.get('/cats',(req,res)=>{
// 	console.log("CAT REQUEST!!!");
// 	res.send("Meow!!!");
// })

// app.get('/dog',(req,res)=>{
// 	res.send("woff!!");
// })
// app.get('/',(req,res)=>{
// 	res.send("Welcome to the homepage");
// })
// app.get('/search',(req,res)=>{
// 	const {q}=req.query;
// 	res.send(`<h1>${q}</h1>`)
// 	//res.send(`I do not know the path`);
// 	console.log(q)
// })
// app.get('/r/:subreddit',(req,res)=>{
// 	//res.send("This is a subreddit");
// 	console.log(req.params);
// 	const {subreddit}=req.params;
// 	res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
// })

// app.get('*',(req,res)=>{
// 	res.send("I don't know that path");
// })

// app.listen(3000,()=>{
// 	console.log("Listening on port 3000!")
// })

