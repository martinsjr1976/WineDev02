const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type: String
    },
    type:{
        type: String
    },
    year:{
        type: Number
    },
    country:{
        type: String
    },
    region:{
        type: String
    },
    price:{
        type: Number
    }    
})

const Winedb = mongoose.model('winedb', schema);

module.exports = Winedb;