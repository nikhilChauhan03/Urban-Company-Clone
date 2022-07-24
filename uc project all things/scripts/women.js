let newarr=JSON.parse(localStorage.getItem("user_details"))||[];
let payment1=()=>{
  let new1=document.querySelector(".btn1");
  let main_part111=document.getElementById("main_part13").innerHTML;
  let main_part122=document.getElementById("main_part14").innerHTML;
  // console.log(new1)
  let data=document.getElementById("theraphy1").innerText;
  let p=document.getElementById("p").innerText;
  let cp=document.getElementById("p");
  // console.log(p)
  // console.log(cp);
p=+p;
  // console.log(data);
  // console.log(typeof(p));
  append1(new1,data,p,cp,main_part111,main_part122);
  append2(p);
}
let payment2=()=>{
  let main_part111=document.getElementById("main_part15").innerHTML;
  let main_part122=document.getElementById("main_part16").innerHTML;
  let new1=document.querySelector(".btn2");
  let cp=document.getElementById("p1");
  let data=document.getElementById("theraphy2").innerText;
  let p=document.getElementById("p1").innerText
  p=+p;
  // console.log(data);
  // console.log(typeof(p));
  append1(new1,data,p,cp,main_part111,main_part122)
  append2(p);
}
let payment0=()=>{
  let new1=document.querySelector(".btn0");
  let main_part111=document.getElementById("main_part11").innerHTML;
  let main_part122=document.getElementById("main_part12").innerHTML;
  // console.log(main_part111);
  // console.log(main_part111);
  let data=document.getElementById("theraphy90").innerText;
  let p=document.getElementById("power").innerText;
  let cp=document.getElementById("power");
  p=+p;
  // console.log(data);
  // console.log(p);
  console.log(typeof(p));
   append1(new1,data,p,cp,main_part111,main_part122);
   append2(p);
}
let payment3=()=>{
  let data=document.getElementById("theraphy3").innerText;
  let p=document.getElementById("p2").innerText
  // console.log(data);
  // console.log(p);
  append2(p);
  append2(p);
}
let payment=()=>{
  let new1=document.querySelector(".btn3");
  let data=document.getElementById("theraphy4").innerText;
  let p=document.getElementById("p3").innerText;
  // console.log(data);
  // console.log(p);
  append1(new1,data,p);
  append2(p);
}
let payment4=()=>{
  let main_part111=document.getElementById("main_part17").innerHTML;
  let main_part122=document.getElementById("main_part18").innerHTML;
  let cp=document.getElementById("p4");
  let new1=document.querySelector(".btn4");
  let data=document.getElementById("theraphy5").innerText;
  let p=document.getElementById("p4").innerText;
  p=+p;
  // console.log(data);
  // console.log(p);
  append1(new1,data,p,cp,main_part111,main_part122);
  append2(p);
}
let payment5=()=>{
  let main_part111=document.getElementById("main_part19").innerHTML;
  let main_part122=document.getElementById("main_part20").innerHTML;
  let cp=document.getElementById("p5");
  let new1=document.querySelector(".btn5");
  let data=document.getElementById("theraphy6").innerText;
  let p=document.getElementById("p5").innerText;
  p=+p;
  // console.log(data);
  // console.log(p);
  append1(new1,data,p,cp,main_part111,main_part122);
  append2(p);
}


let append1=(new1,data,p,cp,main_part111,main_part122)=>{
  // let make_payment=document.getElementById("btn");
let final=document.querySelector(".btn0");
final.addEventListener("click",function(){
  chal(p,cp)
})
new1.innerHTML=null;
  let new_p=document.createElement("p");
  new_p.innerText="-";
new_p.addEventListener("click",function(){
  decreament(p,cp);
})
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
    let newp1=document.createElement("p");
increament1++;
increament1=increament1;
console.log(increament1);
if(increament1>3){
  alert("you can't add anymore of this item");
  increament1=1;
}
else{
// p1.innerText=increament1;
console.log(newp1)
 let new_p=document.getElementById("product_price");
p=p+p;
cp.innerHTML=p;
var obj={
  data,
  p,
  main_part111,
  main_part122,
}
}

newarr.push(obj);
// console.log(newarr)
localStorage.setItem("user_details",JSON.stringify(newarr));

 }

// let decreament=()=>{
  // let new_p=document.getElementById("product_price");
  // decreament1=decreament1-1199;
  // new_p.innerHTML=decreament1;
  let container=document.querySelector(".add_to_cart");
//  let container1=document.querySelector(".view_cart");

let append2=(p)=>{
  let finap_p=p;
   container.innerHTML=null;
   p=p;

  //  p=p-p;
    console.log(p);
    // container1.innerHTML=null;
    let text="Saved $130 with Plus";
    // text.setAttribute("id","text");
    let div5=document.createElement("div");
    div5.append(text);
  let div=document.createElement("div");
  let div1=document.createElement("div");
  let div3=document.createElement("div3");
  let div4=document.createElement("div4");
  let btn=document.createElement("button");
  btn.setAttribute("id","new_btn");
  btn.innerText="View Cart"
  btn.addEventListener("click",function(){
    payment_page();
  })
  div4.setAttribute("class","hide4");
  div3.setAttribute("class","hide3");
  div3.innerHTML="$"+p+"<br>";
div3.append(div5);

  div.setAttribute("class","hide1");
  div1.setAttribute("class","hide2");
  div.innerText="Congratulations $850 saved so far"
  // div1.innerText="hlo i am there";
container.append(div,div1);
div1.append(div3);
div1.append(div4);
div4.append(btn);
// container1.append(div1);
}

function chal(p,cp){
  // console.log(cp);
  console.log(p);
  p=p+p;
  console.log(p);
cp.innerHTML=p;
}

let  first_div=document.getElementById("first_div1");
let first_scroll=document.querySelector(".im4");
first_div.addEventListener("click",scrolltop);

function scrolltop(){
  first_scroll.scrollIntoView({behavior:"smooth"});
}
let  first_div3=document.getElementById("first_div3");
let first_scroll1=document.querySelector(".im1");
first_div3.addEventListener("click",scrolltop1);
function scrolltop1(){
  first_scroll1.scrollIntoView({behavior:"smooth"});
}
let  first_div4=document.getElementById("first_div4");
let first_scroll2=document.querySelector(".im3");
first_div4.addEventListener("click",scrolltop2);
function scrolltop2(){
  first_scroll2.scrollIntoView({behavior:"smooth"});
}
let  first_div5=document.getElementById("first_div5");
let first_scroll3=document.querySelector(".im9");
first_div5.addEventListener("click",scrolltop3);
function scrolltop3(){
  first_scroll3.scrollIntoView({behavior:"smooth"});
}
let  first_div6=document.getElementById("first_div6");
let first_scroll4=document.querySelector(".im6");
first_div6.addEventListener("click",scrolltop4);
function scrolltop4(){
  first_scroll4.scrollIntoView({behavior:"smooth"});
}
let  first_div7=document.getElementById("first_div2");
let first_scroll5=document.querySelector(".im5");
first_div7.addEventListener("click",scrolltop5);
function scrolltop5(){
  first_scroll5.scrollIntoView({behavior:"smooth"});
}
let  first_div8=document.getElementById("first_div7");
let first_scroll6=document.querySelector(".im2");
first_div8.addEventListener("click",scrolltop6);
function scrolltop6(){
  first_scroll6.scrollIntoView({behavior:"smooth"});
}
 let decreament1=4
let decreament=(p,cp)=>{
  decreament1--;
if(decreament1<1){
  alert("Add atleast one item")
}
else{
  p=p-500;
  cp.innerHTML=p;
}
}
let payment_page=()=>{
window.location.href="../payment1.html";
}