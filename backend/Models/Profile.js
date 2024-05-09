const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
 BusinessName : {
    type: String
  },
  Email: {
    type: String
  },
  PhoneNumber: {
    type: Number
  },
  AdharNumber:{
    type: Number
  },
  Disability:{
    type:String
  },
  // Address:{
  //   type: String
  // },
  City:{
    type: String
  },
  State:{
    type: String
  },
  Country:{
    type: String
  },
  BusinessCategory: {
    type: String
  },
  BusinessDetails: {
    type: String
  },
  Timings: {
    type: String
  },
  WebsiteURL: {
    type: String
  },
 
}, {
    collection: 'businessProfiles'
  })

module.exports = mongoose.model('Student', studentSchema)