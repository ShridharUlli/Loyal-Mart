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


  function RadioFields() {
    return {
        value: false, 
        init() {
          this.value = this.$el.querySelector('input[type=radio]:checked').value
        },      
    }
}
window.RadioFields = RadioFields;

//checkbox


// let numberButton  = document.querySelector('input[name="number"]');

//   numberButton.addEventListener("change", function(){
//     console.log(numberButton.checked)
    
//   })
// var radios = document.querySelectorAll('input[type=radio][name="number"]');

// function changeHandler(event) {
//    if ( this.checked) {
//      let classList = this.nextElementSibling.classList;
//      classList.remove("text-teal-600");
//      classList.add("bg-teal-600", "text-white");
//      console.log(this);
//    } else if ( !(this.checked) ) {
//       classList.remove("text-teal-600");
//       classList.add("bg-teal-600", "text-white");
//    }  
// }

// Array.prototype.forEach.call(radios, function(radio) {
//    radio.addEventListener('change', changeHandler);
// });

// if(phoneNumbers.length){
//   let phoneNumbersClassList = phoneNumbers.nextElementSibling.classList;
//   phoneNumbers.addEventListener("change",function(){
//     phoneNumbersClassList.remove("text-teal-600");
//     phoneNumbersClassList.add("bg-teal-600","text-white");
//   })
// }else if(phoneNumberSelected.length){
//   let phoneNumbersSelectedClassList = phoneNumberSelected.nextElementSibling.classList;
//   phoneNumberSelected.addEventListener("change",function(){
//     phoneNumbersSelectedClassList.add("text-teal-600");
//     phoneNumbersSelectedClassList.remove("bg-teal-600","text-white");
//   })
// }


// let phoneNumbers  = document.querySelectorAll('input[name="number"]');
// let phoneNumberSelected = document.querySelectorAll('input[name="number"]:checked');

// if(phoneNumbers.length){
//   let phoneNumbersClassList = phoneNumbers.nextElementSibling.classList;
//   phoneNumbers.addEventListener("change",function(){
//     phoneNumbersClassList.remove("text-teal-600");
//     phoneNumbersClassList.add("bg-teal-600","text-white");
//   })
// }else if(phoneNumberSelected.length){
//   let phoneNumbersSelectedClassList = phoneNumberSelected.nextElementSibling.classList;
//   phoneNumberSelected.addEventListener("change",function(){
//     phoneNumbersSelectedClassList.add("text-teal-600");
//     phoneNumbersSelectedClassList.remove("bg-teal-600","text-white");
//   })
// }





// let phoneNumberSelected = document.querySelector('input[name="number"]:checked');

// let phoneNumberSelected = document.querySelectorAll('input[name="number"]');
// phoneNumberSelected.forEach(element => {
//   element.addEventListener("change", (e) => {
//     let classList = phoneNumberSelected.nextElementSibling.classList();
//     if(e.checked){
//       classList.remove("text-teal-600");
//       classList.add("bg-teal-600","text-white");
//     }else{
//       classList.add("text-teal-600");
//       classList.remove("bg-teal-600","text-white");
//     }
//   })
  
// });
