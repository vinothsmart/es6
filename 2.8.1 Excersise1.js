function handlePosts() {
  const posts = [
    { id: 23, title: "Daily JS News" },
    { id: 52, title: "Code Refactor City" },
    { id: 105, title: "The Brightest Ruby" },
  ];

  //   for (var i = 0; i < posts.length; i++) {
  //     savePost(posts[i]);
  //   }

  posts.forEach(function (post) {
    console.log(post);
    savePost(post);
  });
}

console.log(handlePosts());
