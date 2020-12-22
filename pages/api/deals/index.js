import Deal from "../../../models/Deal";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const deals = await Deal.find(); /* find all the data in our database */
        res.status(200).json({ success: true, data: deals });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        console.log("req.body :>> ", req.body);
        const deal = await Deal.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: deal });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
