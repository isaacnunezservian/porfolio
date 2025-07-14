// navigation  menu js
const playButton = document.getElementById('play_button');
const video = document.getElementById('video');
const poster = document.getElementById('poster');
const playBtnContainer = document.getElementById('botonplay');

// Evento para manejar el clic en el botón de reproducción
playBtnContainer.addEventListener('click', (e) => {
  e.preventDefault(); // Evitar que el enlace recargue la página

  // Ocultar el botón de reproducción y la imagen del poster
  playBtnContainer.style.display = 'none';
  poster.style.display = 'none';

  // Mostrar el iframe y ponerle el src de YouTube con autoplay
  video.src = "https://www.youtube.com/embed/DZXX2O2s7Mw?autoplay=1";
  video.style.display = 'block';
});