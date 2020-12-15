const {Schema, model} = require("mongoose");
    const order = new Schema ({
        name: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: false
        }
    })
module.exports = model('Order', order)