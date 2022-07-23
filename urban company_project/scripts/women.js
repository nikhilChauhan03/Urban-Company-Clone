let newarr=JSON.parse(localStorage.getItem("user_details"))||[];
let payment1=()=>{
  let new1=document.querySelector(".btn1");
  let main_part111=document.getElementById("main_part13").innerHTML;
  let main_part122=document.getElementById("main_part14").innerHTML;
  console.log(new1)
  let data=document.getElementById("theraphy1").innerText;
  let p=document.getElementById("p").innerText;
  let cp=document.getElementById("p");
p=+p;
  console.log(data);
  console.log(typeof(p));
  append1(new1,data,p,cp,main_part111,main_part122);
}
let payment2=()=>{
  let main_part111=document.getElementById("main_part15").innerHTML;
  let main_part122=document.getElementById("main_part16").innerHTML;
  let new1=document.querySelector(".btn2");
  let cp=document.getElementById("p1");
  let data=document.getElementById("theraphy2").innerText;
  let p=document.getElementById("p1").innerText
  p=+p;
  console.log(data);
  console.log(typeof(p));
  append1(new1,data,p,cp,main_part111,main_part122)
}
let payment0=()=>{
  let new1=document.querySelector(".btn0");
  let main_part111=document.getElementById("main_part11").innerHTML;
  let main_part122=document.getElementById("main_part12").innerHTML;
  console.log(main_part111);
  console.log(main_part111);
  let data=document.getElementById("theraphy90").innerText;
  let p=document.getElementById("power").innerText;
  let cp=document.getElementById("power");
  p=+p;
  console.log(data);
  console.log(p);
  console.log(typeof(p));
   append1(new1,data,p,cp,main_part111,main_part122);
   append2();
}
let payment3=()=>{
  let data=document.getElementById("theraphy3").innerText;
  let p=document.getElementById("p2").innerText
  console.log(data);
  console.log(p);

}
let payment=()=>{
  let new1=document.querySelector(".btn3");
  let data=document.getElementById("theraphy4").innerText;
  let p=document.getElementById("p3").innerText;
  console.log(data);
  console.log(p);
  append1(new1,data,p);
}
let payment4=()=>{
  let main_part111=document.getElementById("main_part17").innerHTML;
  let main_part122=document.getElementById("main_part18").innerHTML;
  let cp=document.getElementById("p4");
  let new1=document.querySelector(".btn4");
  let data=document.getElementById("theraphy5").innerText;
  let p=document.getElementById("p4").innerText;
  p=+p;
  console.log(data);
  console.log(p);
  append1(new1,data,p,cp,main_part111,main_part122);
}
let payment5=()=>{
  let main_part111=document.getElementById("main_part19").innerHTML;
  let main_part122=document.getElementById("main_part20").innerHTML;
  let cp=document.getElementById("p5");
  let new1=document.querySelector(".btn5");
  let data=document.getElementById("theraphy6").innerText;
  let p=document.getElementById("p5").innerText;
  p=+p;
  console.log(data);
  console.log(p);
  append1(new1,data,p,cp,main_part111,main_part122);
}


let append1=(new1,data,p,cp,main_part111,main_part122)=>{
  // let make_payment=document.getElementById("btn");

new1.innerHTML=null;
  let new_p=document.createElement("p");
  new_p.innerText="-";
// new_p.addEventListener("click",function(){
//   decreament();
// })
new_p.style.fontSize="20px";
let p1=document.createElement("p");
p1.innerText="1";
p1.style.fontSize="20px";
let p2=document.createElement("p");
p2.addEventListener("click",function(){
  increament(p,cp,data,main_part111,main_part122);
})
p2.innerText="+";
p2.style.fontSize="20px";
new1.append(new_p,p1,p2);
  }
   let increament1=1;
// //   let price=1199;


  let increament=(p,cp,data,main_part111,main_part122)=>{
    // let newp1=document.createElement("p");
increament1++;
increament1=increament1;
// console.log(increament1);
// if(increament1>3){
//   alert("you can't add anymore of this item")
// }
// p1.innerText=increament1;
// console.log(newp1)
//  let new_p=document.getElementById("product_price");
p=p+p;
cp.innerHTML=p;
let obj={
  data,
  p,
  main_part111,
  main_part122,
}
newarr.push(obj);
console.log(newarr)
localStorage.setItem("user_details",JSON.stringify(newarr));

 }

// let decreament=()=>{
  // let new_p=document.getElementById("product_price");
  // decreament1=decreament1-1199;
  // new_p.innerHTML=decreament1;
  let container=document.querySelector(".add_to_cart");
 let container1=document.querySelector(".view_cart");
let append2=()=>{
   container.innerHTML=null;
  //  container1.innerHTML=null;
  let div=document.createElement("div");
  let div1=document.createElement("div");
  div.setAttribute("class","hide1");
  div1.setAttribute("class","hide2");
  div.innerText="Congratulations $850 saved so far"
container.append(div);
container1.append(div1);
}