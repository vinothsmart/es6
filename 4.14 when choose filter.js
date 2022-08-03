const post = {
  id: 4,
  title: "Post title",
};

const comments = [
  {
    postId: 4,
    conntent: "Hey, this is a comment",
  },
  {
    postId: 3,
    conntent: "This is new comment",
  },
  {
    postId: 4,
    conntent: "This is another comment",
  },
];

const commentsByPost = comments.filter((comment) => comment.postId === post.id);

console.log(commentsByPost);
