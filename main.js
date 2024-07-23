const shareBtn = document.querySelectorAll(".share_btn");
const shareLinkBtn = document.querySelector(".share_links_btn");

// console.log(shareBtn);
shareBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    shareLinkBtn.classList.contains("hidden")
      ? shareLinkBtn.classList.remove("hidden")
      : shareLinkBtn.classList.add("hidden");
  });
});


const heightP = document.getElementById("height");

const widthP = document.getElementById("width");

heightP.innerHTML = `Height: ${window.innerHeight}`;
widthP.innerHTML = `Width: ${window.innerWidth}`;
