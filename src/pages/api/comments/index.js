import { comments } from "../../../../shared/data";

export default function handler(req, res) {
  res.status(200).json(comments);
}
