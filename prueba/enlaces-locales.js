// Mantiene las rutas públicas con barra final y permite abrir el HTML localmente.
if (window.location.protocol === 'file:') {
  for (const link of document.querySelectorAll('a[data-local-page]')) {
    const href = link.getAttribute('href');
    const [path, fragment] = href.split('#');
    link.setAttribute('href', path + 'index.html' + (fragment ? '#' + fragment : ''));
  }
}
