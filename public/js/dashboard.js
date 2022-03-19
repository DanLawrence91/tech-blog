const newPostBtn = async (event) => {
  event.preventDefault();

  return document.location.replace("/post");
};

document.querySelector(".new-post-btn").addEventListener("submit", newPostBtn);
