import dbConnect from '../../../utils/dbConnect'
import Notification from '../../../models/Notification'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const notifications = await Notification.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: notifications })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const notification = await Notification.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: notification })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
