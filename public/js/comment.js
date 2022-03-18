const newCommentHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#comments").value.trim();

  if (content) {
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({ content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      content.value = "";
      window.location.reload();
    } else {
      alert("Failed to comment");
    }
  }
};

document.querySelector("#comment-form").addEventListener("submit", newCommentHandler);
