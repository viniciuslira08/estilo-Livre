document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('#menuPrincipal .nav-link');
  const secoes = document.querySelectorAll('header[id], section[id]');

  // 1. Marca o item do menu conforme a seção visível
  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;

      const id = entrada.target.getAttribute('id');

      links.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    });
  }, {
    rootMargin: '-45% 0px -50% 0px'
  });

  secoes.forEach((secao) => observer.observe(secao));

  // 2. Fecha o menu hamburguer ao clicar em um item (mobile)
  links.forEach((link) => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('menuPrincipal');
      if (menu.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});