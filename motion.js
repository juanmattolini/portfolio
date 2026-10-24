// Movimiento de la página: entradas al hacer scroll, título por palabras, barra de progreso y teléfonos que siguen al mouse.
// Si la persona pidió menos movimiento en su sistema, no se anima nada y todo queda visible desde el principio.
(function () {
  var root = document.documentElement;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  root.classList.add('motion');

  // Título principal: cada palabra sube por separado. El texto completo queda en aria-label para lectores de pantalla.
  document.querySelectorAll('.hero h1, .case-title').forEach(function (h) {
    var palabras = h.textContent.trim().split(/\s+/);
    h.setAttribute('aria-label', h.textContent.trim());
    h.textContent = '';
    palabras.forEach(function (p, i) {
      var caja = document.createElement('span');
      caja.className = 'word';
      caja.setAttribute('aria-hidden', 'true');
      var w = document.createElement('span');
      w.textContent = p;
      w.style.setProperty('--d', (i * 70) + 'ms');
      caja.appendChild(w);
      h.appendChild(caja);
      if (i < palabras.length - 1) h.appendChild(document.createTextNode(' '));
    });
  });

  // Bloques que entran al hacer scroll. Los grupos entran en cascada, uno detrás del otro.
  var sueltos = [
    '.hero p', '.showreel .work-head', '.showreel video', '.work-head', '.offer > div', '.steps h2',
    '.case-intro .lead', '.case-intro .links', '.tour', '.case h2:not(.tour-h)', '.arch', '.solo > *', '.next a', '.contact p', '.contact .mail'
  ];
  var grupos = ['.project-list', '.offer ul', '.tool-list', '.steps ol', '.features', '.decisions', '.facts'];
  var vistos = new Set();
  var marcar = function (el, d) {
    if (vistos.has(el) || el.closest('.hero h1, .case-title')) return;
    vistos.add(el);
    el.classList.add('rv');
    if (d) el.style.setProperty('--d', d + 'ms');
  };
  grupos.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (g) {
      Array.prototype.forEach.call(g.children, function (hijo, i) { marcar(hijo, Math.min(i, 8) * 70); });
    });
  });
  sueltos.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el, i) {
      var d = el.matches('.hero p') ? 280 + i * 90 : 0;
      marcar(el, d);
    });
  });

  var io = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  vistos.forEach(function (el) { io.observe(el); });

  // Barra de progreso de lectura arriba de todo.
  var barra = document.createElement('div');
  barra.className = 'progress';
  barra.setAttribute('aria-hidden', 'true');
  document.body.appendChild(barra);
  var pendiente = false;
  var actualizar = function () {
    pendiente = false;
    var max = root.scrollHeight - innerHeight;
    barra.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, scrollY / max) : 0) + ')';
  };
  addEventListener('scroll', function () {
    if (!pendiente) { pendiente = true; requestAnimationFrame(actualizar); }
  }, { passive: true });
  actualizar();

  // Portada: los teléfonos se inclinan un poco hacia el mouse (solo con mouse, no en el celular).
  var telefonos = document.querySelector('.phones');
  if (telefonos && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var hero = document.querySelector('.hero');
    hero.addEventListener('pointermove', function (ev) {
      var r = hero.getBoundingClientRect();
      var x = (ev.clientX - r.left) / r.width - 0.5;
      var y = (ev.clientY - r.top) / r.height - 0.5;
      telefonos.style.transform = 'perspective(1000px) rotateY(' + (x * 10) + 'deg) rotateX(' + (-y * 8) + 'deg) translate3d(' + (x * 14) + 'px, ' + (y * 10) + 'px, 0)';
    });
    hero.addEventListener('pointerleave', function () { telefonos.style.transform = ''; });
  }
})();
