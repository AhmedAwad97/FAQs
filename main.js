let collapsable = document.querySelectorAll(".question-line");

collapsable.forEach((line) => {
  line.addEventListener("click", () => {
    line.parentNode.classList.toggle("hidden");
    let icons = line.querySelectorAll(".collapsable");

    line.parentNode.classList.contains("hidden")
      ? icons.forEach((icon) =>
          icon.setAttribute("src", "assets/images/icon-plus.svg")
        )
      : icons.forEach((icon) =>
          icon.setAttribute("src", "assets/images/icon-minus.svg")
        );
  });
});
