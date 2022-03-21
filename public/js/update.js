// user can update post by clicking this button to create a put request to add to the content of a post, if successful redirected back to dashboard
const updateButtonHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#post-title").value;
  const content = document.querySelector("#post-content").value;
  const id = location.pathname.split("/")[2];

  const response = await fetch(`/api/post/${id}`, {
    method: "PUT",
    body: JSON.stringify({ id, title, content }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response) {
    document.location.replace("/dashboard");
  }
};

// allows for a post to be deleted when clicking correct button
const delButtonHandler = async (event) => {
  event.preventDefault();

  const id = location.pathname.split("/")[2];
  const response = await fetch(`/api/post/${id}`, {
    method: "DELETE",
  });

  if (response) {
    document.location.replace("/dashboard");
  }
};

document.querySelector("#update").addEventListener("click", updateButtonHandler);

document.querySelector("#delete").addEventListener("click", delButtonHandler);
