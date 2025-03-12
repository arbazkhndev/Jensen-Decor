document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");
    const categoryList = document.getElementById("category-list");
    const sizeList = document.getElementById("size-list");
  
    // Updated data: each subcategory now includes a name and URL
    const categoryData = {
      "metal-wall-art": {
        subcategories: [
          { name: "Modern", url: "metal-modern.html" },
          { name: "Abstract", url: "metal-abstract.html" },
          { name: "Nature", url: "metal-nature.html" },
          { name: "Minimalist", url: "metal-minimalist.html" },
          { name: "Geometric", url: "metal-geometric.html" }
        ],
        sizes: ['12" x 16"', '20" x 28"', '28" x 39"', '40" x 55"']
      },
      "wallpapers": {
        subcategories: [
          { name: "Textured", url: "wallpaper-textured.html" },
          { name: "Floral", url: "wallpaper-floral.html" },
          { name: "Patterned", url: "wallpaper-patterned.html" },
          { name: "Ombre", url: "wallpaper-ombre.html" },
          { name: "Geometric", url: "wallpaper-geometric.html" }
        ],
        sizes: ['10" x 14"', '18" x 24"', '24" x 36"', '36" x 48"']
      },
      "photo-frame-art": {
        subcategories: [
          { name: "Classic Frames", url: "frame-classic.html" },
          { name: "Collage Frames", url: "frame-collage.html" },
          { name: "Wooden Frames", url: "frame-wooden.html" },
          { name: "Metal Frames", url: "frame-metal.html" },
          { name: "Minimalist", url: "frame-minimalist.html" }
        ],
        sizes: ['8" x 10"', '11" x 14"', '16" x 20"', '24" x 30"']
      },
      "mirror-art": {
        subcategories: [
          { name: "Wall Mirrors", url: "mirror-wall.html" },
          { name: "Decorative Mirrors", url: "mirror-decorative.html" },
          { name: "LED Mirrors", url: "mirror-led.html" },
          { name: "Antique Mirrors", url: "mirror-antique.html" },
          { name: "Minimalist", url: "mirror-minimalist.html" }
        ],
        sizes: ["Small", "Medium", "Large", "Extra Large"]
      },
      "wall-shelves": {
        subcategories: [
          { name: "Floating Shelves", url: "shelves-floating.html" },
          { name: "Corner Shelves", url: "shelves-corner.html" },
          { name: "Bookshelves", url: "shelves-books.html" },
          { name: "Rustic Shelves", url: "shelves-rustic.html" },
          { name: "Modern Shelves", url: "shelves-modern.html" }
        ],
        sizes: ["30cm", "50cm", "75cm", "100cm"]
      },
      "wall-mounted-animals": {
        subcategories: [
          { name: "Metal Animal Heads", url: "animals-metal.html" },
          { name: "Wooden Designs", url: "animals-wooden.html" },
          { name: "Abstract", url: "animals-abstract.html" },
          { name: "3D Sculptures", url: "animals-3d.html" },
          { name: "Minimalist", url: "animals-minimalist.html" }
        ],
        sizes: ["Small", "Medium", "Large", "Oversized"]
      }
    };
  
    navItems.forEach(item => {
      item.addEventListener("mouseenter", function () {
        const category = this.getAttribute("data-category");
        if (categoryData[category]) {
          // Build clickable subcategory links
          categoryList.innerHTML = categoryData[category].subcategories
            .map(sub => `<div><a href="${sub.url}" style="color:inherit; text-decoration:none;">${sub.name}</a></div>`)
            .join("");
          // Build sizes as plain text (you can wrap in <a> if needed)
          sizeList.innerHTML = categoryData[category].sizes
            .map(size => `<div>${size}</div>`)
            .join("");
        }
      });
    });
  });
  