// ================================================
// THE GEM — Landing Page
// app.js — Actualizar año del footer automáticamente
// ================================================

// Al cargar la página: poner el año actual en el footer
document.addEventListener('DOMContentLoaded', function () {
  const footerTexto = document.querySelector('.site-footer small');

  if (footerTexto) {
    const anioActual = new Date().getFullYear();
    footerTexto.textContent = footerTexto.textContent.replace('2026', anioActual);
  }

  console.log('[THE GEM] Landing page cargada correctamente ✅');
});
