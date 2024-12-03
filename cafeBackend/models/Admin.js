//this is the schema for admin
const mongoose = require ('mongoose');
const bcrypt = require ('bcryptjs');
const adminschema = new mongoose.Schema({
    username :{type: String , required :true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['superadmin', 'manager'], default: 'manager' },
})
//hashing the password before saving
adminSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  });
module.exports = mongoose.model('Admin', adminSchema);