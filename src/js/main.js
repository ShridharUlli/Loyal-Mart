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


//address list

let addressList = function() {
  return {
    addresses: [
      {id: 1, name: 'Home', address: '#01,Unnamed Road, Karnataka,Bangalore,565656'},
      {id: 2, name: "Office", address: '#01,Unnamed Road, Karnataka,Bangalore,565656'},
      {id: 3, name: 'Apartment', address: '#01,Unnamed Road, Karnataka,Bangalore,565656'}
    ],
    selectedAddresses: [1],

    toggleAddresses(id) {
      if (this.addressSelected(id)) {
        this.selectedAddresses = this.selectedAddresses.filter(h => h !== id)
      } else {
        this.selectedAddresses.push(id)
      }                                      
    },
    addressSelected(id) {
      return this.selectedAddresses.indexOf(id) > -1;
    }
  }
}