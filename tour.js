// Recorrido por las pantallas de una app: carrusel con flechas, lista de pantallas, deslizar y teclado.
document.querySelectorAll('[data-tour]').forEach(function (tour) {
  var track = tour.querySelector('.tour-track');
  var slides = Array.prototype.slice.call(tour.querySelectorAll('.tour-slide'));
  var pasos = Array.prototype.slice.call(tour.querySelectorAll('.tour-steps button'));
  var prev = tour.querySelector('.tour-prev');
  var next = tour.querySelector('.tour-next');
  var count = tour.querySelector('.tour-count');
  var texto = tour.querySelector('.tour-text');
  var actual = 0;

  // Puntos entre las flechas (se ven en el celular, donde no entra la lista de pantallas).
  var puntos = document.createElement('div');
  puntos.className = 'tour-dots';
  puntos.setAttribute('aria-hidden', 'true');
  slides.forEach(function () { puntos.appendChild(document.createElement('i')); });
  next.parentNode.insertBefore(puntos, next);

  function marcar(i) {
    actual = i;
    pasos.forEach(function (b, j) { b.setAttribute('aria-current', j === i ? 'step' : 'false'); });
    Array.prototype.forEach.call(puntos.children, function (d, j) { d.className = j === i ? 'on' : ''; });
    slides.forEach(function (s, j) { s.setAttribute('aria-hidden', j === i ? 'false' : 'true'); });
    count.textContent = (i + 1) + ' de ' + slides.length + ' · ' + pasos[i].textContent;
    texto.textContent = slides[i].dataset.texto;
    prev.disabled = i === 0;
    next.disabled = i === slides.length - 1;
  }
  function ir(i) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    track.scrollTo({ left: slides[i].offsetLeft - track.offsetLeft, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    marcar(i);
  }

  prev.addEventListener('click', function () { ir(actual - 1); });
  next.addEventListener('click', function () { ir(actual + 1); });
  pasos.forEach(function (b, i) { b.addEventListener('click', function () { ir(i); }); });
  track.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); ir(actual + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); ir(actual - 1); }
  });
  // Al deslizar con el dedo o el trackpad, la pantalla más visible pasa a ser la actual.
  var espera;
  track.addEventListener('scroll', function () {
    clearTimeout(espera);
    espera = setTimeout(function () {
      var i = Math.round(track.scrollLeft / track.clientWidth);
      if (i !== actual) marcar(i);
    }, 80);
  });
  marcar(0);
});
