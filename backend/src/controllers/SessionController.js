//sessão de login, logout e etc.

const User = require ('../models/User');
//index- retorna uma listagem de sessões, show- listar uma unica sessão, store- criar uma sessão, update- alterar uma sessão, destroy- deletar uma sessão

module.exports = {
    async store(req,res){
         const {email} = req.body;
        
        let  user =  await User.findOne({email});//await aguarda a instrução finaliar
        if (!user) {
            user = await User.create({email});
        }
        
        
        
        return res.json(user);
    }

};