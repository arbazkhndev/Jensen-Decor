document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const categoryList = document.getElementById("category-list");
  const sizeList = document.getElementById("size-list");

  const categoryData = {
    "metal-wall-art": {
      subcategories: [
				{ name: "Abstract Metal Art", url: "index.html" },
        { name: "Geometric & Minimalist Designs", url: "metal-abstract.html" },
        {
          name: "Nature-Inspired (Trees, Leaves, Flowers)",
          url: "metal-nature.html",
        },
        { name: "Industrial & Rustic Metal Art", url: "metal-minimalist.html" },
        {
          name: "Personalized & Custom Metal Signs",
          url: "metal-geometric.html",
        },
      ],
      sizes: ['12" x 16"', '20" x 28"', '28" x 39"', '40" x 55"'],
    },
    wallpapers: {
      subcategories: [
        { name: "Peel & Stick Wallpapers", url: "wallpaper-textured.html" },
        {
          name: "Textured Wallpapers (Brick, Wood, Marble, etc.)",
          url: "wallpaper-floral.html",
        },
        { name: "Floral & Botanical Prints", url: "wallpaper-patterned.html" },
        { name: "Geometric & Modern Designs", url: "wallpaper-ombre.html" },
        { name: "Kids' Room Wallpapers", url: "wallpaper-geometric.html" },
      ],
      sizes: ['10" x 14"', '18" x 24"', '24" x 36"', '36" x 48"'],
    },
    "photo-frame-art": {
      subcategories: [
        { name: "Collage Frames", url: "frame-classic.html" },
        { name: "Single Large Statement Frames", url: "frame-collage.html" },
        { name: "Wooden & Rustic Frames", url: "frame-wooden.html" },
        { name: "Minimalist & Metal Frames", url: "frame-metal.html" },
        { name: "Floating Frames", url: "frame-minimalist.html" },
      ],
      sizes: ['8" x 10"', '11" x 14"', '16" x 20"', '24" x 30"'],
    },
    "mirror-art": {
      subcategories: [
        { name: "Decorative Wall Mirrors", url: "mirror-wall.html" },
        { name: "LED & Backlit Mirrors", url: "mirror-decorative.html" },
        { name: "Geometric & Modern Mirrors", url: "mirror-led.html" },
        { name: "Antique & Vintage Mirrors", url: "mirror-antique.html" },
        { name: "Sunburst & Artistic Mirrors", url: "mirror-minimalist.html" },
      ],
      sizes: ["Small", "Medium", "Large", "Extra Large"],
    },
    "wall-shelves": {
      subcategories: [
        { name: "Floating Shelves", url: "shelves-floating.html" },
        { name: "Corner Shelves", url: "shelves-corner.html" },
        { name: "Hexagonal & Geometric Shelves", url: "shelves-books.html" },
        { name: "Rustic Wooden Shelves", url: "shelves-rustic.html" },
        {
          name: "Wall Shelves with Hooks & Storage",
          url: "shelves-modern.html",
        },
      ],
      sizes: ["30cm", "50cm", "75cm", "100cm"],
    },
    "wall-mounted-animals": {
      subcategories: [
        { name: "Metal Animal Silhouettes", url: "animals-metal.html" },
        { name: "Wooden Carved Animal Heads", url: "animals-wooden.html" },
        { name: "3D Faux Taxidermy", url: "animals-abstract.html" },
        { name: "Wildlife & Safari-Themed Wall Art", url: "animals-3d.html" },
        {
          name: "Artistic & Abstract Animal Designs",
          url: "animals-minimalist.html",
        },
      ],
      sizes: ["Small", "Medium", "Large", "Oversized"],
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
