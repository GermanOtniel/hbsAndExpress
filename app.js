const express = require("express");
const app = express();
const hbs = require("hbs");
//config
app.use(express.static("public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials');
//config

const users = [{name:"BlisS", age:31},{name:"juanito"}];

app.get("/", (req,res,next)=>{
    const ctx = {
        titulo:"Perro",
        users,
        bliss:"BlisS"
    }
    //aqui va la logica
    res.render("home", ctx);
});

app.get("/photos", (req,res)=>{
    //traigo la info de la db y la meto a ctx
    res.render("fotos",{message:{text:"Puchame"},photos:["https://pbs.twimg.com/profile_images/719587633353986048/U6ub_oiK_400x400.jpg", "https://cdn-images-1.medium.com/max/1200/0*jp3IFb08Sy3_k3N_."]})
});

app.listen(3000, err=>console.log("escuchando"));

