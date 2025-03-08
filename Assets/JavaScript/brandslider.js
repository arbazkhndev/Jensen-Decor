document.addEventListener("DOMContentLoaded", function () {
    const brandTrack = document.querySelector(".brand-track");
    const brands = Array.from(brandTrack.children);
    
    // Clone the entire set to create a seamless loop
    brands.forEach((brand) => {
        const clone = brand.cloneNode(true);
        brandTrack.appendChild(clone);
    });
    
});
document.addEventListener("DOMContentLoaded", function () {
    const brandTrack = document.querySelector(".brand-track");
    const brands = Array.from(brandTrack.children);
    
    // Clone the entire set to create a seamless loop
    brands.forEach((brand) => {
        const clone = brand.cloneNode(true);
        brandTrack.appendChild(clone);
    });
});
