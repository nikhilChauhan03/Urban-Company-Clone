let arr=JSON.parse(localStorage.getItem("checkOut"));

showData(arr);

function showData(elm){
    let div1=document.createElement("div");
    let img1=document.createElement("img");
    img1.src=elm.Images.one;
    div1.append(img1)
    let div2=document.createElement("div");
    let img2=document.createElement("img");
    img2.src=elm.Images.two;
    div2.append(img2);
    let div=document.createElement("div");
    div.id="hotel_details";
    div.append(div1,div2);
    let name=document.createElement("h1");
    name.innerText=elm.Title;
    let price=document.createElement("p");
    price.innerText=`Amount-${elm.Price}`
    let form=document.createElement("div");
    user_name=document.createElement("input");
    user_name.type="text";
    user_name.id="user_name";
    user_name.placeholder="user name";
    form.append(user_name);
 
    user_number=document.createElement("input");
    user_number.type="number";
    user_number.id="user_number";
    user_number.placeholder="user number";
  
 
    let date=document.createElement("label");
   date.innerText="Check in"
   let date1=document.createElement("label");
   date1.innerText="Check out"
   let check_in=document.createElement("input");
   check_in.type="date";
   check_in.id="check_in";

   let check_out=document.createElement("input");
   check_out.type="date";
   check_out.id="check_out";
 
   let book=document.createElement("input");
   book.type="button";
   book.value="Book now";
   book.className="book";
book.addEventListener("click",function(){
    let x=user_name.value;
  
setTimeout(() => {
    let str=`${x} Your order is booked!`
    console.log(str)
    alert (str)
},5000);
})

   form.id="form"
   form.append(user_name,user_number,date,check_in,date1,check_out,book);
  
    document.querySelector("#checkout").append(div,name,price);
    document.querySelector("body").append(form);
    


};