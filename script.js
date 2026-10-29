document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. MENÚ HAMBURGUESA (Lógica corregida)
  // ==========================================
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav'); 
  const menuIcon = menuToggle ? menuToggle.querySelector('i') : null;

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      // Aplica la clase .active al <nav> para que el CSS lo muestre
      mainNav.classList.toggle('active');
      
      // Cambiar icono a "X" al abrir
      if (menuIcon) {
        if (mainNav.classList.contains('active')) {
          menuIcon.classList.replace('fa-bars', 'fa-times');
        } else {
          menuIcon.classList.replace('fa-times', 'fa-bars');
        }
      }
    });
  }

  // Cierra el menú automáticamente al hacer clic en un enlace
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(enlace => {
    enlace.addEventListener('click', () => {
      if (mainNav && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        if (menuIcon) {
          menuIcon.classList.replace('fa-times', 'fa-bars');
        }
      }
    });
  });

  // ==========================================
  // 2. AÑO AUTOMÁTICO EN EL FOOTER
  // ==========================================
  const anio = document.getElementById('anio');
  if (anio) {
    anio.textContent = new Date().getFullYear();
  }

});
