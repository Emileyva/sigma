  // Obtener todos los elementos del menú
  const links = document.querySelectorAll('.navegacion a');

  // Escuchar el clic en cada enlace
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      // Agregar la clase 'active' al enlace clicado
      links.forEach(link => link.classList.remove('active'));
      this.classList.add('active');

      // Obtener el destino del enlace y hacer scroll suavemente hacia esa sección
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        event.preventDefault();

        // Calcular el offsetTop ajustado con scroll-margin-top
        const scrollMarginTop = parseInt(window.getComputedStyle(target).scrollMarginTop, 10) || 0;
        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - scrollMarginTop;

        window.scroll({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });