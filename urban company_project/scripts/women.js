// let images1=document.getElementById("images");
// //    let myimages=document.getElementById("mini-images");
// let sticky=images1.offsetTop;
//    window.onscroll=function()  {
//     if (window.pageYOffset >= sticky) {
//         images1.classList.add("sticky")
//     } else {
//         images1.classList.remove("sticky");
//     }
//   }

  let payment=()=>{
let make_payment=document.getElementById("btn");
// let add=document.getElementsByClassName("add_items")
console.log(make_payment)
 make_payment.innerHTML=null;
let p=document.createElement("p");
p.innerText="-";
p.addEventListener("click",function(){
  decreament();
})
p.style.fontSize="20px";
let p1=document.createElement("p");
p1.innerText="1";
p1.style.fontSize="20px";
let p2=document.createElement("p");
p2.addEventListener("click",function(){
  increament(p1);
})
p2.innerText="+";
p2.style.fontSize="20px";
make_payment.append(p,p1,p2);
  }
  let increament1=1;
  let price=1199;
  let increament=(p1)=>{
    // let newp1=document.createElement("p");
increament1++;
increament1=increament1;
// console.log(increament1);
if(increament1>3){
  alert("you can't add anymore of this item")
}
p1.innerText=increament1;
// console.log(newp1)
let new_p=document.getElementById("product_price");
price=price+1199;
new_p.innerHTML=price;
 }

// let decreament=()=>{
//   // let new_p=document.getElementById("product_price");
//   // decreament1=decreament1-1199;
//   // new_p.innerHTML=decreament1;
//  }

