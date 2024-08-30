const express = require("express");  
const router = express.Router();
const app=express();

const {FechMen, FechMen2}= require("./Midelware");

app.use(FechMen, FechMen2);

router.get("/",FechMen,(req,res)=>{
    res.send("Estas en raiz")
});

router.get("/inicio",FechMen2,(req,res)=>{
    res.send("Estas en Inicio")
});

module.exports = router;