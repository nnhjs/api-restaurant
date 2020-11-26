import dbConnect from '../../../utils/dbConnect'
import Notification from '../../../models/Notification'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const notification = await Notification.findById(id)
        if (!notification) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: notification })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const notification = await Notification.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!notification) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: notification })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedNotification = await Notification.deleteOne({ _id: id })
        if (!deletedNotification) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
