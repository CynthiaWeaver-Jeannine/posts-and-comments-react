import React, { useState, useEffect } from "react";

function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.log(error));
  }, [postId]);

  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.body}</p>
          <p>{comment.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
