// navigation  menu js
const playButton = document.getElementById('play_button');
const video = document.getElementById('video');
const poster = document.getElementById('poster');
const playBtnContainer = document.getElementById('botonplay');

// Evento para manejar el clic en el botón de reproducción
playBtnContainer.addEventListener('click', (e) => {
  e.preventDefault(); // Evitar que el enlace recargue la página
  console.log('Hola');

  // Ocultar el botón de reproducción y la imagen del poster
  playBtnContainer.style.display = 'none';
  poster.style.display = 'none';

  // Mostrar el video y comenzar la reproducción
  video.style.display = 'block';
  video.play();
});