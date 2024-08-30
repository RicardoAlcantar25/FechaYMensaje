function FechMen(req, res, next){
const Fecha =new Date().toDateString();
console.log("Holaa, ¿Como esta?")
console.log("La Fecha es :"+Fecha );
next();
}

function FechMen2(req, res, next){
    const Fecha =new Date().toDateString();
    console.log("Holaa, ¿Como esta? Esta en inicio")
    console.log("La Fecha es :"+Fecha );
    next();
    }

module.exports={
    FechMen,
    FechMen2
};