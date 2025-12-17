const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.product img').forEach(img => {
  img.addEventListener('click', e => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
