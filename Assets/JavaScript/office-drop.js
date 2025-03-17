document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const categoryList = document.getElementById("category-list");
    const sizeList = document.getElementById("size-list");
  
    const categoryData = {
      "metal-wall-art": {
        subcategories: [
          { name: "Abstract Metal Art", url: "officecat1-1.html" },
          { name: "Geometric & Minimalist Designs", url: "officecat1-2.html" },
          {
            name: "Nature-Inspired (Trees, Leaves, Flowers)",
            url: "officecat1-3.html",
          },
        ],
        sizes: ['12" x 16"', '20" x 28"', '28" x 39"'],
      },
      wallpapers: {
        subcategories: [
          { name: "Peel & Stick Wallpapers", url: "officecat2-1.html" },
          {
            name: "Textured Wallpapers",
            url: "officecat2-2.html",
          },
          { name: "Floral & Botanical Prints", url: "officecat2-3.html" },
        ],
        sizes: ['12" x 16"', '20" x 28"', '28" x 39"'],
      },
      "photo-frame-art": {
        subcategories: [
          { name: "Collage Frames", url: "officecat3-1.html" },
          { name: "Single Large Statement Frames", url: "officecat3-2.html" },
          { name: "Wooden & Rustic Frames", url: "officecat3-3.html" },
        ],
        sizes: ['12" x 16"', '20" x 28"', '28" x 39"'],
      },
      "mirror-art": {
        subcategories: [
          { name: "Decorative Wall Mirrors", url: "officecat4-1.html" },
          { name: "LED & Backlit Mirrors", url: "officecat4-2.html" },
          { name: "Geometric & Modern Mirrors", url: "officecat4-3.html" },
        ],
        sizes: ["Small", "Medium", "Large"],
      },
      "wall-shelves": {
        subcategories: [
          { name: "Floating Shelves", url: "officecat5-1.html" },
          { name: "Corner Shelves", url: "officecat5-2.html" },
          { name: "Hexagonal & Geometric Shelves", url: "officecat5-3.html" },
        ],
        sizes: ["30cm", "50cm", "75cm"],
      },
      "wall-mounted-animals": {
        subcategories: [
          { name: "Metal Animal Silhouettes", url: "officecat6-1.html" },
          { name: "Wooden Carved Animal Heads", url: "officecat6-2.html" },
          { name: "3D Faux Taxidermy", url: "officecat6-3.html" },
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
  