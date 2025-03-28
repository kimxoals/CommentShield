console.log("🔍 CommentShield loaded on YouTube");

const waitForComments = setInterval(() => {
  const commentSection = document.querySelector(
    "#contents ytd-comment-thread-renderer"
  );
  if (commentSection) {
    console.log("YouTube comments found.");
    clearInterval(waitForComments);

    // Example: Add a red border to the first comment for demo
    commentSection.style.border = "2px solid red";
  }
}, 1000);
