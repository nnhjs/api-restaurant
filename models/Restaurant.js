import mongoose from 'mongoose'

/* RestaurantSchema will correspond to a collection in your MongoDB database. */
const RestaurantSchema = new mongoose.Schema({
  coordinate: {
    /* The coordinate of this Restaurant */

    type: Object,
  },
  title: {
    /* Restaurant's title, if applicable */

    type: String,
  },
  description: {
    /* Restaurant's description, if applicable */
    type: String,
  },
  image: {
    /* Url to user image */

    required: [true, 'Please provide an image url for this Restaurant.'],
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
  categories: {
    /* categories */

    type: Array,
  },
})

export default mongoose.models.Restaurant || mongoose.model('Restaurant', RestaurantSchema)
