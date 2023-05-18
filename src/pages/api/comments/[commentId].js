import { comments } from "../../../../shared/data";

export default async function handler(req, res) {
  const { commentId } = req.query;
  if (req.method === "GET") {
    const comment = comments.find((com) => com.id === parseInt(commentId));

    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const comment = comments.find((com) => com.id === commentId);
    const index = comments.findIndex((com) => com.id === parseInt(commentId));

    comments.splice(index, 1);
    res.status(200).json(comment);
  }
}
