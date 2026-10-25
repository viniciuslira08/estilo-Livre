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

  // 3. Formulário de contato: mostra confirmação e limpa os campos
  const formContato = document.getElementById('formContato');
  const alertaContato = document.getElementById('alertaContato');

  if (formContato && alertaContato) {
    formContato.addEventListener('submit', (event) => {
      event.preventDefault();

      alertaContato.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          Mensagem enviada! Em breve entraremos em contato.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
        </div>
      `;

      formContato.reset();
    });
  }
});