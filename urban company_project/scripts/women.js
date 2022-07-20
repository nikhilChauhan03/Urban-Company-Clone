 
// let images1=document.getElementById("images");
var mini1_images=document.getElementsByid("mini-images");

window.onscroll=function()  {
    if (window.pageYOffset >= mini_images1.offsetTop) {
      images1.classList.add("sticky")
    } else {
      images1.classList.remove("sticky");
    }
  }