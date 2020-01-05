//para reservar


const mongoose = require ('mongoose');

const BookingSchema = new mongoose.Schema({
    //imagem, thumbnail-somente o nome da imagem; Company: empresa; price: valor; techs:tecnologias
    data: String,
    approved: Boolean,

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    spot:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

module.exports = mongoose.model('Booking', BookingSchema);