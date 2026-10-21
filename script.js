/* =====================================================
   PAPANTECNO — SCRIPT.JS
   Menú móvil + Video YouTube + Año automático
   ===================================================== */

(function () {
  'use strict';

  /* =====================================================
     1. MENÚ HAMBURGUESA
     ===================================================== */
  function initMenu() {

    /* Busca el botón: primero por ID, si no, por clase */
    const menuToggle =
      document.getElementById('menuToggle') ||
      document.querySelector('.menu-toggle');

    /* Busca el nav: primero por ID, si no, por tag */
    const menu =
      document.getElementById('menu') ||
      document.querySelector('nav');

    if (!menuToggle || !menu) return;

    /* ---- Abrir ---- */
    function abrirMenu() {
      menu.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
      const icono = menuToggle.querySelector('i');
      if (icono) icono.className = 'fas fa-times';
    }

    /* ---- Cerrar ---- */
    function cerrarMenu() {
      menu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      const icono = menuToggle.querySelector('i');
      if (icono) icono.className = 'fas fa-bars';
    }

    /* ---- Toggle ---- */
    function toggleMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      if (menu.classList.contains('active')) {
        cerrarMenu();
      } else {
        abrirMenu();
      }
    }

    /* Evento principal: click (funciona en desktop y móvil) */
    menuToggle.addEventListener('click', toggleMenu);

    /* Soporte táctil extra (algunos navegadores antiguos) */
    menuToggle.addEventListener('touchstart', toggleMenu, { passive: false });

    /* Cierra el menú al tocar un enlace */
    menu.querySelectorAll('a').forEach(function (enlace) {
      enlace.addEventListener('click', function () {
        cerrarMenu();
      });
    });

    /* Cierra el menú al tocar fuera */
    document.addEventListener('click', function (e) {
      if (!menu.classList.contains('active')) return;
      const tocoBoton = e.target.closest('.menu-toggle, #menuToggle');
      if (!menu.contains(e.target) && !tocoBoton) {
        cerrarMenu();
      }
    });

    /* Cierra el menú si se pasa a tamaño desktop */
    window.addEventListener('resize', function () {
      if (window.innerWidth > 800) cerrarMenu();
    });
  }

  /* =====================================================
     2. VIDEO: thumbnail → reproductor YouTube
     ===================================================== */
  function initVideo() {

    const videoCard = document.querySelector('.video-card');
    if (!videoCard) return;

    videoCard.addEventListener('click', function (e) {
      const videoId = videoCard.dataset.video;

      /* Si no está configurado el ID, deja pasar el link normal */
      if (!videoId || videoId === 'TU_ID_DE_VIDEO') return;

      e.preventDefault();

      const iframe = document.createElement('iframe');
      iframe.src =
        'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0';
      iframe.allow =
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.style.cssText =
        'width:100%; aspect-ratio:16/9; border:0; display:block;';

      videoCard.innerHTML = '';
      videoCard.appendChild(iframe);
      videoCard.style.pointerEvents = 'none';
    });
  }

  /* =====================================================
     3. AÑO AUTOMÁTICO EN EL FOOTER
     ===================================================== */
  function initAnio() {
    const anio = document.getElementById('anio');
    if (anio) anio.textContent = new Date().getFullYear();
  }

  /* =====================================================
     4. INICIALIZACIÓN SEGURA
     ===================================================== */
  function init() {
    initMenu();
    initVideo();
    initAnio();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
