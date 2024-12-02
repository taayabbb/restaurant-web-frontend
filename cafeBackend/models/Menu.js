const mongoose =require ('mongoose');
const menuschema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    isSpecial: { type: Boolean, default: false },
    isOutOfStock: { type: Boolean, default: false },
});
const Menu = mongoose.model('Menu', menuschema);
module.exports = Menu;