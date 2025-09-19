function getUser(id, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((userData) => {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((res) => res.json())
        .then((postsData) => {
          fetch(
            `https://jsonplaceholder.typicode.com/comments?postId=${postsData[0]}.1`
          )
            .then((res) => res.json())
            .then((commentsData) => {
              callback(null, {
                user: userData,
                posts: postsData,
                comments: commentsData,
              });
            })
            .catch((err) => callback(err));
        })
        .catch((err) => callback(err));
    })
    .catch((err) => callback(err));
}

getUser(1, (err, result) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Usuario:", result.user);
    console.log("Posts:", result.posts);
    console.log("Comentarios del primer post:", result.comments);
  }
});
