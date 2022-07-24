 let added=document.getElementById("Item-added");

let cart=JSON.parse(localStorage.getItem("Pricing Details")) ; 

console.log(cart)


function displaydata(details){
    added.innerHTML="";


    details.forEach(function(el){
        let item=document.createElement("div");
        item.setAttribute("class","show");
        
        let name = document.createElement("h4")
        name.innerText=el.name; 
        let offer = document.createElement("h2")
        offer.innerText=el.offer;
        
        let price = document.createElement("p")
        price.innerText=el.price;

        let li=document.createElement("li")
        li.innerText=el.a;
        let li2=document.createElement("li")
        li2.innerText=el.b;
        let li3=document.createElement("li")
        li3.innerText=el.c;

        let DeleteCart=document.createElement("button")
    DeleteCart.innerText="Remove"
    DeleteCart.setAttribute("class","remove");

    DeleteCart.addEventListener("click",
    function(){
        Delete(el.offer);
  
    })


        item.append(name,offer, price,li,li2,li3,DeleteCart)
        added.append(item);
    })
}

displaydata(cart)


function Delete(id){
    let deleted=cart.filter(function(element){
        return element.offer !=id;
    })
    cart=deleted;
    localStorage.setItem("Pricing Details",JSON.stringify(cart));;
    displaydata(cart)

}