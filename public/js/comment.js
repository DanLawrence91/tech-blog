// collects comments added to relevant section and sends a post request. if successful comment box clears and pages reloads to show comment
const newCommentHandler = async (event) => {
  event.preventDefault();
  const content = document.querySelector("#comments").value;

  const id = location.pathname.split("/")[2];
  console.log(id);

  if (content) {
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({ content, id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response) {
      document.location.reload(true);
    }
  }
};

document.querySelector("#comment-form").addEventListener("click", newCommentHandler);
