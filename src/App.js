import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then((data) => {
      console.log(data)
        const modifiedPosts = data.map((post) => ({
          ...post,
          showComments: false
        }));
        setPosts(modifiedPosts);
      })
      .catch((error) => console.log(error));
  }, []);

  const toggleComments = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            showComments: !post.showComments
          };
        }
        return post;
      })
    );
  };

  return (
    <div>
    <div className="App">
      {posts.map((post) => (
        <div key={post.id}>
          <PostDetail post={post} toggleComments={() => toggleComments(post.id)} />
        </div>
      ))}
    </div>
      </div>
  );
}

export default App;
