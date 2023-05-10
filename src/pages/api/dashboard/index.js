export default function handler(req, res) {
  res.status(200).json({
    posts: 100,
    likes: 200,
  });
}
