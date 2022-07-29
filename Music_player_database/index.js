const express=require('express');
const app=express();
const path=require('path');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/moodSicDB', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
	console.log("CONNECTION OPEN");
	//mongoose.connection.db.dropDatabase();
})
.catch((err)=>{
	console.log("CONNECTION REFUSED");
	console.log(err);
})
app.listen(3000,()=>{
	console.log("App is listening on port 3000");
})


const userSchema=new mongoose.Schema({
	username:String,
	email:String,
	age:Number,
	country:String
})

const songSchema=new mongoose.Schema({
	id:String,
	title:String,
	duration:Number,
	album_id:String,
	artist_id:String,
	link:String
})

const albumSchema=new mongoose.Schema({
	id:String,
	title:String,
	year:String,
	genre:String,
	format:String
})

const artistSchema= new mongoose.Schema({
	id:String,
	name:String,
	style:String,
	country:String
})

const User=mongoose.model('User',userSchema);
//const ashish=new user({username:'Ashish Kumar',email:'ashish.kumar2018b@vitstudent.ac.in',age:21,country:'India'});
app.get('/user/delete',async (req,res)=>{
	await User.deleteMany({})
	.then(()=>{
		res.send("It worked");
		console.log("It worked");
	})
	.catch((e)=>{
		console.log("Error is detected");
	})
})
app.get('/user/insert',async(req,res)=>{
	await User.insertMany([
		{username:'Ashish Kumar',email:'ashish.kumar2018b@vitstudent.ac.in',age:21,country:'India'},
		{username:'Mayank Rawat',email:'mayankrawat2018@gamil.com',age:21,country:'India'},
		{username:'Diproop',email:'diproop2018b@vitstudent.ac.in',age:21,country:'India'},
		{username:'Vaishnavi',email:'vaishnavi2018b@vitstudent.ac.in',age:21,country:'India'}
	])
	.then((data)=>{
		res.send("It worked");
		console.log("IT WORKED!");
	//console.log(data);
	})
	.catch((err)=>{
		console.log("ERROR FOUND");
		console.log(err);
	})
})

app.get('/user',async (req,res)=>{
	const user=await User.find({});
	res.render('user',{user});
})

const Music=mongoose.model('Music',songSchema);
app.get('/music/delete',async (req,res)=>{
	await Music.deleteMany({})
	.then(()=>{
		res.send("It worked, Music collection is cleared");
		console.log("It worked");
	})
	.catch((e)=>{
		console.log("Error is detected,Music collection is not cleared");
	})
})
app.get('/music/insert',async(req,res)=>{
	await Music.insertMany([
		{id:'1',title:'Faded',duration:3.32,album_id:1,artist_id:1,link:'https://drive.google.com/file/d/1snbaHYAjiiV3hBvKHj9IieSwSMJv9n7l/view?usp=sharing'},
		{id:'2',title:'Fight Back',duration:3.16,album_id:2,artist_id:2,link:'https://drive.google.com/file/d/1LYF7NI-Lu5bY1ibKlOx3ASb2fQ2ugtpz/view?usp=sharing'},
		{id:'3',title:'Hislerim',duration:3.34,album_id:3,artist_id:3,link:'https://drive.google.com/file/d/1jLtyz8lNbXh50mpAfkIH0SpCyxZiumbo/view?usp=sharing'},
		{id:'4',title:'Ignite',duration:3.49,album_id:4,artist_id:4,link:'https://drive.google.com/file/d/1K5W7gI1PcrQYfdqg80lD7Nak1cZcPBsH/view?usp=sharing'},
		{id:'5',title:'On my way',duration:3.36,album_id:5,artist_id:5,link:'https://drive.google.com/file/d/1LQfWxaY5fAqjFHqpra7y1bvN5qphOSZ7/view?usp=sharing'},
		{id:'6',title:'Post Malone',duration:2.41,album_id:6,artist_id:6,link:'https://drive.google.com/file/d/1kCCgQ7y3Nx5IXA1Ha7tLmHDvCwkh7jHk/view?usp=sharing'},
		{id:'7',title:'Trapped in my mind',duration:3.36,album_id:7,artist_id:7,link:'https://drive.google.com/file/d/16FaGBQ1pwJHab5Mir4E_Ua5qCBnZXt01/view?usp=sharing'}
	])
	.then((data)=>{
		res.send("It worked");
		console.log("IT WORKED!");
	//console.log(data);
	})
	.catch((err)=>{
		console.log("ERROR FOUND");
		console.log(err);
	})
})

app.get('/music',async (req,res)=>{
	const music=await Music.find({});
	res.render('music',{music});
})