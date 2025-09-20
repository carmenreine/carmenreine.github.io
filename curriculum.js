const buttons = document.querySelectorAll('.menu button');
const sections = document.querySelectorAll('.seccion');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Cambiar botón activo
    buttons.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    // Mostrar sección correspondiente
    const id = btn.dataset.target;
    sections.forEach(sec => {
      sec.classList.toggle('activa', sec.id === id);
    });
  });
});
