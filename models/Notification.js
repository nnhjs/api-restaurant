import mongoose from 'mongoose'

/* NotificationSchema will correspond to a collection in your MongoDB database. */
const NotificationSchema = new mongoose.Schema({
  title: {
    /* Notification's title, if applicable */

    type: String,
  },
  details: {
    /* Notification's description, if applicable */
    type: String,
  },
})

export default mongoose.models.Notification || mongoose.model('Notification', NotificationSchema)
