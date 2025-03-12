document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".interactive-nav-item");
  const underline = document.querySelector(".underline");

  function moveUnderline(item) {
    const { width, left } = item.getBoundingClientRect();
    const containerLeft = document
      .querySelector(".nav-container")
      .getBoundingClientRect().left;

    underline.style.width = `${width}px`; // Match width of hovered item
    underline.style.transform = `translateX(${left - containerLeft}px)`;
  }

  navItems.forEach((item) => {
    item.addEventListener("mouseenter", () => moveUnderline(item));
  });

  // Optional: Reset underline when mouse leaves the menu
  document
    .querySelector(".nav-container")
    .addEventListener("mouseleave", () => {
      underline.style.width = "0px";
    });
});
