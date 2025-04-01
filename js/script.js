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
  });
})();

