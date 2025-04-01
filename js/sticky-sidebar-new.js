/**
 * Sticky Sidebar Script
 * Torna a sidebar fixa durante a rolagem da página.
 */
(function ($) {
  // Executar quando o documento estiver pronto
  $(document).ready(function() {
    
    const sidebar = $('.sidebar');
    const main = $('main');    
    
    if (sidebar.length === 0 || main.length === 0) {      
      return;
    }
    
    // Armazenar a posição original da sidebar
    const originalSidebarTop = sidebar.offset().top;
    const sidebarWidth = sidebar.width();
    let isStickyApplied = false;
    
    // Função para atualizar a posição da sidebar
    function updateSidebar() {
      const mainBottom = main.offset().top + main.outerHeight();
      const scrollTop = $(window).scrollTop();
      const sidebarHeight = sidebar.outerHeight();
      
      // Quando a página é rolada além da posição original da sidebar
      if (scrollTop > originalSidebarTop - 135) {
        // Se ainda não chegamos ao final do conteúdo principal
        // 135 é a altura do header
        if (scrollTop + sidebarHeight < mainBottom - 135) {
          if (!isStickyApplied) {
            // Calcular a posição direita em relação à janela
            const windowWidth = $(window).width();
            const sidebarRight = windowWidth - (sidebar.offset().left + sidebarWidth);
            
            sidebar.addClass('sticky');
            sidebar.removeClass('bottom');
            sidebar.css({
              'width': sidebarWidth + 'px',
              'right': sidebarRight + 'px',  // Definir a posição à direita
              'left': 'auto'  // Garantir que o left não interfira
            });
            isStickyApplied = true;
          }
        } else {
          // Chegamos ao fim do conteúdo principal
          sidebar.removeClass('sticky');
          sidebar.addClass('bottom');
          sidebar.css({
            'width': '',
            'right': '',
            'left': ''
          });
          isStickyApplied = false;
        }
      } else {
        // Antes de chegar à posição original
        if (isStickyApplied) {
          sidebar.removeClass('sticky');
          sidebar.removeClass('bottom');
          sidebar.css({
            'width': '',
            'right': '',
            'left': ''
          });
          isStickyApplied = false;
        }
      }
    }
    
    // Adicionar evento de scroll com throttling para melhor performance
    let lastScrollTime = 0;
    $(window).on('scroll', function() {
      const now = Date.now();
      if (now - lastScrollTime > 10) { // Limite de 10ms entre atualizações
        lastScrollTime = now;
        updateSidebar();
      }
    });
    
    // Adicionar evento de redimensionamento da janela
    $(window).on('resize', function() {
      // Recalcular todas as dimensões
      if (isStickyApplied) {
        sidebar.removeClass('sticky');
        sidebar.css({
          'width': '',
          'right': '',
          'left': ''
        });
        
        // Pequeno timeout para garantir que as dimensões sejam recalculadas
        setTimeout(function() {
          const newSidebarWidth = sidebar.width();
          const windowWidth = $(window).width();
          const newSidebarRight = windowWidth - (sidebar.offset().left + newSidebarWidth);
          
          sidebar.addClass('sticky');
          sidebar.css({
            'width': newSidebarWidth + 'px',
            'right': newSidebarRight + 'px',
            'left': 'auto'
          });
        }, 10);
      }
    });
    
    // Executar na carga inicial
    updateSidebar();
  });
})(jQuery); 