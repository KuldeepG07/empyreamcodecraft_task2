// JavaScript code to handle pagination
const pageButtons = document.querySelectorAll('.page-btn');
const galleryImages = document.querySelectorAll('.gallery img');

// Hide all images except the first page
for (let i = 1; i < galleryImages.length; i++) {
    if (i >= galleryImages.length) {
        galleryImages[i].style.display = 'none';
    }
}
pageButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        pageButtons.forEach((btn) => {
            btn.classList.remove('active');
        });

        // Add 'active' class to the clicked button
        button.classList.add('active');

        // Hide all images
        galleryImages.forEach((image) => {
            image.style.display = 'none';
        });

        // Calculate the range of images to display based on the button index
        const startIndex = index;
        const endIndex = startIndex + 2; // Assuming 3 images per page

        // Display the selected range of images
        for (let i = startIndex; i < endIndex && i < galleryImages.length; i++) {
            galleryImages[i].style.display = 'block';
        }
    });
});