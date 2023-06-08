let menuMother = document.getElementById("floating-menu-menu");
let menuContent = document.getElementById("floating-menu-row");
let backdrop = document.getElementById("backdrop");

let a = 0;

function toggleMenu(){
    
    if (a == 0){
        a = 1;
    } else {
        a = 0;
    }
    menuMother.classList.toggle("open");
    menuContent.classList.toggle("hide");
    backdrop.classList.toggle("open");

}

$(window).scroll(function(){
  if($(this).scrollTop() > 100){
   menuMother.classList.remove("open");
    menuContent.classList.add("hide");
    backdrop.classList.remove("open");
  }
});