/* ===== MENÚ MÓVIL ===== */
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Cierra el menú al hacer clic en un enlace
menu.querySelectorAll('a').forEach(enlace => {
  enlace.addEventListener('click', () => menu.classList.remove('active'));
});

/* ===== VIDEO: convierte el thumbnail en reproductor al hacer clic ===== */
const videoCard = document.querySelector('.video-card');

if (videoCard) {
  videoCard.addEventListener('click', (e) => {
    const videoId = videoCard.dataset.video;
    if (!videoId || videoId === 'TU_ID_DE_VIDEO') return; // deja pasar el link normal si no está configurado

    e.preventDefault();

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'width:100%; aspect-ratio:16/9; border:0; display:block;';

    videoCard.innerHTML = '';
    videoCard.appendChild(iframe);
    videoCard.style.pointerEvents = 'none';
  });
}

/* ===== AÑO AUTOMÁTICO EN EL FOOTER ===== */
const anio = document.getElementById('anio');
if (anio) anio.textContent = new Date().getFullYear();