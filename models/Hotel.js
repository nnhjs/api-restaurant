import mongoose from 'mongoose'

/* HotelSchema will correspond to a collection in your MongoDB database. */
const HotelSchema = new mongoose.Schema({
  name: {
    /* Hotel's title, if applicable */

    type: String,
  },
  description: {
    /* Hotel's description, if applicable */
    type: String,
  },
  image: {
    /* Url to user image */
    required: [true, 'Please provide an image url for this Hotel.'],
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
  },
})

export default mongoose.models.Hotel || mongoose.model('Hotel', HotelSchema)
