const newPostBtn = async (event) => {
  event.preventDefault();

  return document.location.replace("/post");
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/post/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete post");
    }
  }
};

document.querySelector(".new-post-btn").addEventListener("submit", newPostBtn);

document.querySelector(".post-list").addEventListener("click", delButtonHandler);
