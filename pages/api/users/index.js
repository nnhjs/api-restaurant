import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'
import { cors } from '../../../utils/cors'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()
  // await cors(req, res)
  //đây anh ơi
  switch (method) {
    case 'GET':
      try {
        const users = await User.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const user = await User.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
