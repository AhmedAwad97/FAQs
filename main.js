document.addEventListener("DOMContentLoaded", function () {
  // let minus = document.querySelectorAll(".row.minus  .collapsable");
  // minus.forEach((col) =>
  //   col.setAttribute("src", "assets/images/icon-minus.svg")
  // );

  // let plus = document.querySelectorAll(".row.hidden  .collapsable");
  // plus.forEach((col) => col.setAttribute("src", "assets/images/icon-plus.svg"));

  let questionLines = document.querySelectorAll(".question-line");
  questionLines.forEach((line) => {
    line.addEventListener("click", () => {
      line.parentNode.classList.toggle("hidden");

      let icon = line.querySelector(".collapsable");

      let iconSrc = line.parentNode.classList.contains("hidden")
        ? "/icon-plus.69203b08.svg"
        : "/icon-minus.56ce1e08.svg";

      icon.src = iconSrc;
    });
  });
});
