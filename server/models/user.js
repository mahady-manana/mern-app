import mongoose from 'mongoose'
import crypto from 'crypto'
const UserSchemas = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    index : {unique : true, sparse : true}
    },
  hashed_password: {
    type: String,
  },
  favorite : [{
    item :{type : String}, 
    note : {type : String}
  }]
})
export default mongoose.model('Usermodels_db123', UserSchemas)

