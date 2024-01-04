let collapsable = document.querySelectorAll(".question-line");

collapsable.forEach((line) => {
  line.addEventListener("click", () => {
    line.parentNode.classList.toggle("hidden");
    let icon = line.querySelector(".collapsable");

    line.parentNode.classList.contains("hidden")
      ? icon.setAttribute("src", "assets/images/icon-plus.svg")
      : icon.setAttribute("src", "assets/images/icon-minus.svg");
  });
});
