import { useEffect, useState } from "react";

function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);

  const submitComment = async () => {
    const response = await fetch("api/comments", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log(data);
  };

  const fetchComments = async () => {
    console.log(comments);
    const response = await fetch("api/comments");
    const data = await response.json();
    setComments(data);
    setLoading(false);
    console.log(comments);
  };

  const deleteHandler = async (id) => {
    const response = await fetch(`api/comments/${id}`, { method: "DELETE" });
    fetchComments();
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={submitComment}>Submit Your comment</button>
      </div>
      <button onClick={fetchComments}>Load Comments</button>

      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h1>
              {comment.id} {comment.title}
            </h1>
            <p>{comment.text}</p>
            <button onClick={() => deleteHandler(comment.id)}>
              Delete comment
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Comments;
