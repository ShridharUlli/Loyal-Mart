var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
  });

  var swiper = new Swiper(".trending", {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  //menu opener

  let menuIcon = document.querySelector("#menu");
  let menuContent = document.querySelector("#menuContent");
  let hamburger = document.querySelector("#menu > #hamburger");
  let close = document.querySelector("#menu > #close");
  menuIcon.addEventListener("click",function(e){
    e.preventDefault();
    if (hamburger.classList.contains("block") && close.classList.contains("hidden")) {
      hamburger.classList.remove("block");
      hamburger.classList.add("hidden");
      close.classList.remove("hidden");
      close.classList.add("block");    
      menuContent.classList.remove("hidden");             
      console.log("testing1");

      } else{
        hamburger.classList.add("block");
        hamburger.classList.remove("hidden");
        close.classList.add("hidden");
        close.classList.remove("block");    
        menuContent.classList.add("hidden"); 
        console.log("testing2");
      } 
  });


