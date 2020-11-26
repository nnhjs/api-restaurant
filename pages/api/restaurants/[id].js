import dbConnect from '../../../utils/dbConnect'
import Restaurant from '../../../models/Restaurant'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const restaurant = await Restaurant.findById(id)
        if (!restaurant) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: restaurant })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const restaurant = await Restaurant.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!restaurant) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: restaurant })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedRestaurant = await Restaurant.deleteOne({ _id: id })
        if (!deletedRestaurant) {
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
