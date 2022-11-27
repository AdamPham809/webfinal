let mongoose = require('mongoose');
// create a bag model
let bagModel = mongoose.Schema({
    product: String,
    size: String,
    color: String,
    price: String,
    quantity: Number,
    subtotal: String
    },
    {
        collection: "bags"
    }
);
module.exports = mongoose.model('Bag', bagModel);