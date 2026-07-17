const buttons = document.querySelectorAll(".portfolio-filter button");
const cards = document.querySelectorAll(".portfolio-card");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {

            if (filter === "all") {

                card.style.display = "block";

            } else if (card.classList.contains(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});
// ===== Lightbox =====

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

// Open Lightbox
galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.classList.add("active");
    });
});

function showImage() {
    lightboxImg.src = galleryImages[currentIndex].src;
}

// Close
closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

// Previous
prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage();
});

// Next
nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex =
        (currentIndex + 1) % galleryImages.length;
    showImage();
});

// ESC key
document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "Escape") {
        lightbox.classList.remove("active");
    }

    if (e.key === "ArrowLeft") {
        currentIndex =
            (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage();
    }

    if (e.key === "ArrowRight") {
        currentIndex =
            (currentIndex + 1) % galleryImages.length;
        showImage();
    }
});
