import mongoose from 'mongoose'

/* UserSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  name: {
    /* The name of this user */

    type: String,
    // required: [true, 'Please provide a name for this user.'],
    // maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  age: {
    /* User's age, if applicable */

    type: Number,
  },
  username: {
    /* User's age, if applicable */
    required: [true, 'Please provide a name for this user.'],
    type: String,
  },
  password: {
    /* User's age, if applicable */
    required: [true, 'Pass word.'],
    type: String,
  },
  image_url: {
    /* Url to user image */

    // required: [true, 'Please provide an image url for this user.'],
    type: String,
  },
  userToken: {
    /* Url to user image */
    
    type: String,
  },
  phone: {
    /* phone user */
    
    type: String,
  },
  email: {
    /* Email */
    
    type: String,
  },
  city: {
    /* City */
    
    type: String,
  },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
