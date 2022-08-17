const posts = [
  { id: 1, title: "New Post" },
  { id: 2, title: "Old Post" },
];

const comment = { postId: 1, content: "Great Post" };

const postForComment = posts.find((post) => post.id === comment.postId);

console.log(postForComment);
