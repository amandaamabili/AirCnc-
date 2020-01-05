//perfil do usuario e o que cada id coloca
const Spot = require('../models/Spot');


module.exports={
    async show(req,res){
        const {user_id}= req.headers;

        const Spots= await Spot.find({user:user_id});

        return res.json(Spots);
     }
}