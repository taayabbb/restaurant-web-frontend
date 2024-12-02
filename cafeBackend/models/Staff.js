const mongoose =require('mongoose');
const staffschema = new mongoose.Schema ({
  name: { type: String, required: true },
  role: { type: String, required: true },
  CNIC: { type: String, unique: true, required: true },
  yearsOfExperience: { type: Number, default: 0 },
  grossSalary: { type: Number, required: true },
  promotionLevel: { type: String, default: 'Level 1' }
});
const Staff = mongoose.model('Staff', staffschema);
module.exports = Staff;