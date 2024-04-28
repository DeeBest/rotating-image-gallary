const footerParagraph = document.getElementById('footer-paragraph');
const currentDate = new Date().getFullYear();
footerParagraph.textContent = `Created by \xA9Simphiwe ${currentDate}.`;

const imagesContainer = document.getElementById('images-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let rotationDeg = 0;

prevBtn.addEventListener('click', () => {
  rotationDeg = rotationDeg + 45;
  updateGallery();
});
