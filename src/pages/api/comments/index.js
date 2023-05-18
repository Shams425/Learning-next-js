import { comments } from "../../../../shared/data";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body;
    const newComment = {
      id: Date.now(),
      text: comment,
      title: `comment ${comments.length === 0 ? 1 : comments.length + 1}`,
    };

    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
