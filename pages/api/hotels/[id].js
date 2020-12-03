import dbConnect from '../../../utils/dbConnect'
import Hotel from '../../../models/Hotel'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const hotel = await Hotel.findById(id)
        if (!hotel) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: hotel })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const hotel = await Hotel.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!hotel) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: hotel })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedHotel = await Hotel.deleteOne({ _id: id })
        if (!deletedHotel) {
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
