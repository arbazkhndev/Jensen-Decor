document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const categoryList = document.getElementById("category-list");
  const sizeList = document.getElementById("size-list");

  const categoryData = {
    "metal-wall-art": {
      subcategories: [
				{ name: "Abstract Metal Art", url: "abstractmetalart.html" },
        { name: "Geometric & Minimalist Designs", url: "geomatricwallart.html" },
        {
          name: "Nature-Inspired (Trees, Leaves, Flowers)",
          url: "natureinspired.html",
        },
      ],
      sizes: ['12" x 16"', '20" x 28"', '28" x 39"'],
    },
    wallpapers: {
      subcategories: [
        { name: "Peel & Stick Wallpapers", url: "peel&stickwallpaper.html" },
        {
          name: "Textured Wallpapers (Brick, Wood, Marble, etc.)",
          url: "texturedwallpapers.html",
        },
        { name: "Floral & Botanical Prints", url: "floral&botanicalprints.html" },
      ],
      sizes: ['10" x 14"', '18" x 24"', '24" x 36"'],
    },
    "photo-frame-art": {
      subcategories: [
        { name: "Collage Frames", url: "collageframes.html" },
        { name: "Single Large Statement Frames", url: "singlelargestatementframes.html" },
        { name: "Wooden & Rustic Frames", url: "wooden&rusticframes.html" },
      ],
      sizes: ['8" x 10"', '11" x 14"', '16" x 20"'],
    },
    "mirror-art": {
      subcategories: [
        { name: "Decorative Wall Mirrors", url: "decorativewallmirrors.html" },
        { name: "LED & Backlit Mirrors", url: "lED&backlitmirrors.html" },
        { name: "Geometric & Modern Mirrors", url: "geometric&modernmirrors.html" },
      ],
      sizes: ["Small", "Medium", "Large"],
    },
    "wall-shelves": {
      subcategories: [
        { name: "Floating Shelves", url: "floatingshelves.html" },
        { name: "Corner Shelves", url: "cornershelves.html" },
        { name: "Hexagonal & Geometric Shelves", url: "hexagonal&geometricshelves.html" },
      ],
      sizes: ["30cm", "50cm", "75cm"],
    },
    "wall-mounted-animals": {
      subcategories: [
        { name: "Metal Animal Silhouettes", url: "metalanimalsilhouettes.html" },
        { name: "Wooden Carved Animal Heads", url: "woodencarvedanimalheads.html" },
        { name: "3D Faux Taxidermy", url: "3Dfauxtaxidermy.html" },
      ],
      sizes: ["Small", "Medium", "Large"],
    },
  };

  // 🔹 Hide dropdown & empty lists on page load
  categoryList.innerHTML = "";
  sizeList.innerHTML = "";
  dropdownMenu.style.display = "none";

  // Function to update dropdown content
  function updateDropdownContent(category) {
    if (categoryData[category]) {
      categoryList.innerHTML = categoryData[category].subcategories
        .map(
          (sub) =>
            `<div><a href="${sub.url}" style="color:inherit; text-decoration:none;">${sub.name}</a></div>`
        )
        .join("");

      sizeList.innerHTML = categoryData[category].sizes
        .map((size) => `<div>${size}</div>`)
        .join("");

      dropdownMenu.style.display = "block";
      dropdownMenu.style.opacity = "1";
      dropdownMenu.style.visibility = "visible";
    }
  }

  // Show dropdown only when hovering over a category
  navItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const category = this.getAttribute("data-category");
      updateDropdownContent(category);
    });
  });

  // Hide dropdown when the mouse leaves the menu
  dropdownMenu.addEventListener("mouseleave", function () {
    dropdownMenu.style.opacity = "0";
    dropdownMenu.style.visibility = "hidden";
    setTimeout(() => {
      dropdownMenu.style.display = "none";
      categoryList.innerHTML = ""; // 🔹 Clear after hiding
      sizeList.innerHTML = "";
    }, 300);
  });
});
