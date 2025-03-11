document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const categoryList = document.getElementById("category-list");
    const sizeList = document.getElementById("size-list");

    const categoryData = {
        "metal-wall-art": {
            subcategories: ["Modern", "Abstract", "Nature", "Minimalist", "Geometric"],
            sizes: ["12\" x 16\"", "20\" x 28\"", "28\" x 39\"", "40\" x 55\""]
        },
        "wallpapers": {
            subcategories: ["Textured", "Floral", "Patterned", "Ombre", "Geometric"],
            sizes: ["10\" x 14\"", "18\" x 24\"", "24\" x 36\"", "36\" x 48\""]
        },
        "photo-frame-art": {
            subcategories: ["Classic Frames", "Collage Frames", "Wooden Frames", "Metal Frames", "Minimalist"],
            sizes: ["8\" x 10\"", "11\" x 14\"", "16\" x 20\"", "24\" x 30\""]
        },
        "mirror-art": {
            subcategories: ["Wall Mirrors", "Decorative Mirrors", "LED Mirrors", "Antique Mirrors", "Minimalist"],
            sizes: ["Small", "Medium", "Large", "Extra Large"]
        },
        "wall-shelves": {
            subcategories: ["Floating Shelves", "Corner Shelves", "Bookshelves", "Rustic Shelves", "Modern Shelves"],
            sizes: ["30cm", "50cm", "75cm", "100cm"]
        },
        "wall-mounted-animals": {
            subcategories: ["Metal Animal Heads", "Wooden Designs", "Abstract", "3D Sculptures", "Minimalist"],
            sizes: ["Small", "Medium", "Large", "Oversized"]
        }
    };

    navItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            const category = this.getAttribute("data-category");
            if (categoryData[category]) {
                categoryList.innerHTML = categoryData[category].subcategories.map(sub => `<div>${sub}</div>`).join("");
                sizeList.innerHTML = categoryData[category].sizes.map(size => `<div>${size}</div>`).join("");
            }
            dropdownMenu.style.display = "block";
        });
    });

    // Hide dropdown when mouse leaves
    document.querySelector(".header").addEventListener("mouseleave", function () {
        dropdownMenu.style.display = "none";
    });

    dropdownMenu.addEventListener("mouseenter", function () {
        dropdownMenu.style.display = "block";
    });

    dropdownMenu.addEventListener("mouseleave", function () {
        dropdownMenu.style.display = "none";
    });
});
