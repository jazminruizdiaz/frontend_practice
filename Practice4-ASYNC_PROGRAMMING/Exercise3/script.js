function getUser(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error("Error fetching user data");
      }
      return response.json();
    }
  );
}

function getUserPosts(userId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Error fetching user posts");
    }
    return response.json();
  });
}

function getPostComments(postId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Error fetching post comments");
    }
    return response.json();
  });
}

async function loadUserFeed(userId) {
  try {
    const user = await getUser(userId);
    const posts = await getUserPosts(userId);

    let firstPostComments = [];
    if (posts.length > 0) {
      firstPostComments = await getPostComments(posts[0].id);
    }

    const userFeed = {
      user,
      posts,
      firstPostComments,
    };

    console.log(userFeed);
    return userFeed;
  } catch (error) {
    console.error("Error loading user feed", error);
  }
}

loadUserFeed(1);
