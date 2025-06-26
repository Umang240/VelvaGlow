const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    cart_items: [
        {
            product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
            name: String,
            brand: String,
            price: Number,
            quantity: { type: Number, default: 1 }
        }
    ],
    total_price: { type: Number, default: 0 }
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;