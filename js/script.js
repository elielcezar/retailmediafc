(function () {
  document.addEventListener('DOMContentLoaded', () => {
    
    const w = window.innerWidth;
        const h = window.innerHeight;
        const menuBtn = document.querySelector('.menuBtn');
        const menuBtn2 = document.querySelector('.menuBtn2');     
        const overlay = document.querySelector('.overlay');

        menuBtn.addEventListener("click", function () {                            
            document.body.classList.add('act');
            overlay.classList.add('act');
            menuBtn.classList.add("act");            
        });
        menuBtn2.addEventListener("click", function () {         
            document.body.classList.remove('act');
            overlay.classList.remove('act');
            menuBtn.classList.remove("act");
            menuBtn2.classList.remove("act");  
        });

    
    const swiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    
    /********************************************** */

    const modalOverlay = document.querySelector(".page-node-1 #overlay");
    const modalContent = document.querySelector(".page-node-1 #overlay .content");
    const modalClose = document.querySelector(".page-node-1 #overlay button");

    modalContent.addEventListener('click', function(e){        
        e.stopPropagation();    
        return false;
    })

    modalOverlay.addEventListener('click', function(){
        modalOverlay.classList.remove('active');
        localStorage.setItem('modalShown', 'true');
    })

    modalClose.addEventListener('click', function(){
        modalOverlay.classList.remove('active');
        localStorage.setItem('modalShown', 'true');
    })

    if(modalOverlay){
      const hasModalBeenShown = localStorage.getItem('modalShown');
      
      if (!hasModalBeenShown) {
        modalOverlay.classList.add('active');
        console.log('modalOverlay shown for the first time');
      } else {
        console.log('modalOverlay already shown before');
      }
    }
    

    /*const equipe = document.querySelectorAll("#equipe .item a");
    const overlay = document.querySelector("#overlay");        

    if(equipe){                        
        equipe.forEach((item) => {                
            item.addEventListener('click', function(e){
                e.preventDefault();
                const idAbout = item.getAttribute('href');
                const about = document.querySelector(idAbout);
                const close = document.querySelector(''+idAbout+' button');
                about.classList.add('active');                        
                overlay.classList.add('active');                  

                about.addEventListener('click', function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    return false;
                })

                close.addEventListener('click', function(){
                    overlay.classList.remove('active');
                    about.classList.remove('active');
                })

                overlay.addEventListener('click', function(){
                    overlay.classList.remove('active');
                    about.classList.remove('active');
                })
            })          
        });            
    }   */


  });
})();

