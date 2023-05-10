import { useEffect, useState } from "react";

function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = async () => {
    const response = await fetch("api/comments");
    const data = await response.json();
    setComments(data);
    setLoading(false);
    console.log(comments);
  };

  return (
    <>
      <button onClick={fetchComments}>Comment</button>

      {!loading &&
        comments.map((comment) => {
          <div key={comment.id}>
            <h1>
              {comment.id} {comment.title}
            </h1>
            <p>{comment.text}</p>
          </div>;
        })}
    </>
  );
}

export default Comments;
