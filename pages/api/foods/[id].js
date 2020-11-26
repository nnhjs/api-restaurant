import dbConnect from '../../../utils/dbConnect'
import Food from '../../../models/Food'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const food = await Food.findById(id)
        if (!food) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: food })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const food = await Food.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!food) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: food })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedFood = await Food.deleteOne({ _id: id })
        if (!deletedFood) {
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
