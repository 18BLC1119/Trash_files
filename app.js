
const config={headers:{Accept:'application/json'}};
axios.get("https://icanhazdadjoke.com/",config)
.then((data)=>{
console.log(data.data.joke);
})