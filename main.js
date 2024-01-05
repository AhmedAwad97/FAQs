document.addEventListener("DOMContentLoaded", function () {
  let questionLines = document.querySelectorAll(".question-line");

  questionLines.forEach((line) => {
    line.addEventListener("click", () => {
      line.parentNode.classList.toggle("hidden");

      let icon = line.querySelector(".collapsable");

      let iconSrc = line.parentNode.classList.contains("hidden")
        ? "/assets/images/icon-plus.svg"
        : "/assets/images/icon-minus.svg";

      icon.src = iconSrc;
    });
  });
});
