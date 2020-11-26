import mongoose from 'mongoose'

/* FoodSchema will correspond to a collection in your MongoDB database. */
const FoodSchema = new mongoose.Schema({
  id_restaurant: {
    /* Id restaurant */
    type: String,
  },
  name: {
    /* Food's title, if applicable */

    type: String,
  },
  description: {
    /* Food's description, if applicable */
    type: String,
  },
  image: {
    /* Url to user image */
    required: [true, 'Please provide an image url for this Food.'],
    type: String,
  },
  rating: {
    /* Number rate */
    type: Number,
  },
  reviews: {
    /* Number reviews */
    type: Number,
  },
  price: {
    /*Price food */
    type: Number,
  }
})

export default mongoose.models.Food || mongoose.model('Food', FoodSchema)
