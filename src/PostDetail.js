import React, { useState } from "react";
import Comments from "./Comments";

function PostDetail({ post }) {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };
console.log(post)
  return (
    
      <div className="post-container" onClick={toggleComments}>
       
      <p>{post.title}</p>
        <p> {post.body}</p>
     
      {showComments && <Comments postId={post.id} />}
    
      </div>
  );
}

export default PostDetail;
