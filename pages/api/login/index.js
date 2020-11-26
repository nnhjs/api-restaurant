import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'

export default async function handler(req, res) {
  const {
    query: { username, password },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'POST':
      try {
        console.log(req.body);
        const user = await User.find(
          req.body
        ) /* create a new model in the database */
        if(user) {
          res.status(201).json({ success: true, data: user })
        } else {
          res.status(400).json({ success: false })
        }
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
