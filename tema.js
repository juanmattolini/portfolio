// Modo claro / oscuro. Sin elección sigue al sistema; la elección queda guardada en este navegador.
(function () {
  var root = document.documentElement;
  try { var guardado = localStorage.getItem('tema'); if (guardado) root.dataset.theme = guardado; } catch (e) {}
  var oscuro = function () {
    return root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  };
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.theme-btn');
    if (!btn) return;
    var rotular = function () { btn.setAttribute('aria-label', oscuro() ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'); };
    rotular();
    btn.addEventListener('click', function () {
      root.dataset.theme = oscuro() ? 'light' : 'dark';
      try { localStorage.setItem('tema', root.dataset.theme); } catch (e) {}
      rotular();
    });
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', rotular);
  });
})();
