import dbConnect from '../../../utils/dbConnect'
import Restaurant from '../../../models/Restaurant'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const restaurants = await Restaurant.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: restaurants })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const restaurant = await Restaurant.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: restaurant })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
