import dbConnect from '../../../utils/dbConnect'
import Deal from '../../../models/Deal'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const deal = await Deal.findById(id)
        if (!deal) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: deal })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const deal = await Deal.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!deal) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: deal })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedDeal = await Deal.deleteOne({ _id: id })
        if (!deletedDeal) {
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
