//criação e listagem das empresas

const mongoose = require ('mongoose');

const SpotSchema = new mongoose.Schema({
    //imagem, thumbnail-somente o nome da imagem; Company: empresa; price: valor; techs:tecnologias
    thumbnail: String,
    company: String,
    price:Number,
    techs:[String],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}
,{
    toJSON:{
        virtuals:true,
    },
}
);
//Atributos virtuais são atributos convenientes para se ter por perto, mas que não são mantidos no mongodb.
SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3001/files/${this. thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema);