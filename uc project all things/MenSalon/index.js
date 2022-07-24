/* small images section*/


let Products=
   [ {img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1646814042922-25f8f1.jpeg",
    name:"Packages"},
    {img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631190374864-78f3e8.jpeg",
    name:"Hair Cut Men & Kids"},
    {img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631189933595-01692d.png",
    name:"Hair Color"},
    {img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631189957304-ea2a7b.png",
    name:"Shave/Grooming"},
    {img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631189857376-d49e47.png",
    name:"Face Care"},
    {img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631189905841-237b37.png",
    name:"Message Therapy"}
   ];

   console.log(Products)



localStorage.setItem("Packages",JSON.stringify(Products))


function Product(Products){
    
    let cont=document.getElementById("pack")


    Products.forEach(function(el){
        let box =document.createElement("div");

        let photo = document.createElement("img")
        photo.setAttribute("src",el.img)

        let name = document.createElement("p")
        name.innerText=el.name;

        box.append(photo,name)
        cont.append(box);
    })
}

Product(Products)




let details=[
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1651735873259-9ad829.png",
        name:"Packages",
        offer:"Haircut + Shaving",
        rating:"★ 4.7(900k)",
        price: "599 ₹ • 1hr 5 min",
        a:"Men's Hair Cut",
        b:"Beard Shape & style",
        c:"10 Min Head Massage"

    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1651660889736-7c3f9d.png",
        name:"Packages",
        offer:"Haircut + Face Care",
        rating:"★ 4.8(800k)",
        price: "699 ₹ • 50 Min",
        a:"Face & Neck Detan Pack",
        b:"Men's Hair Cut",

    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1651666576469-ed8a95.png",
        name:"Packages",
        offer:"Haircut + Massage",
        rating:"★ 4.7(700k)",
        price: "399 ₹ • 1hr 5 min",
        a:"Men's Hair Cut",
        b:"10 Min Head Massage",
    

    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1651660884996-1c3ba4.png",
        name:"Packages",
        offer:"Father & Kid's Haircut",
        rating:"★ 4.7(900k)",
        price: "599 ₹ • 1hr 5 min",
        a:"Men's Hair Cut",
        b:"10 Min Head Massage",
       c:"Haircut Boys"
        

    },

    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1651735873259-9ad829.png",
        name:"Packages",
        offer:"Haircut + Shaving",
        rating:"★ 4.7(900k)",
        price: "599 ₹ • 1hr 5 min",
        a:"Men's Hair Cut",
        b:"Beard Shape & style",
        c:"10 Min Head Massage"

    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1651660889736-7c3f9d.png",
        name:"Packages",
        offer:"Haircut + Face Care",
        rating:"★ 4.8(800k)",
        price: "699 ₹ • 50 Min",
        a:"Face & Neck Detan Pack",
        b:"Men's Hair Cut",

    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1651666576469-ed8a95.png",
        name:"Packages",
        offer:"Haircut + Massage",
        rating:"★ 4.7(700k)",
        price: "399 ₹ • 1hr 5 min",
        a:"Men's Hair Cut",
        b:"10 Min Head Massage",
    

    },
];



let cart=JSON.parse(localStorage.getItem("Pricing Details")) || []; 

function detail(details=[]){
    
    let cont=document.getElementById("menu")
  
    details.forEach(function(el){
        let box =document.createElement("div");
       
         let img = document.createElement("img");
         img.setAttribute("src", el.img);
         img.setAttribute("class","photo");

        let name = document.createElement("h4")
        name.innerText=el.name; 
        let offer = document.createElement("h2")
        offer.innerText=el.offer;
        let rating = document.createElement("p")
        rating.innerText=el.rating;
        let price = document.createElement("p")
        price.innerText=el.price;

       
        
        let hr=document.createElement("hr");
        let addToCard=document.createElement("button")
        addToCard.innerText="Add"
        addToCard.setAttribute("class","btn");
        addToCard.addEventListener("click",
        function(){
      if(addToCardfun(el.offer)===true){
        alert("Product added Succesfully");
        cart.push(el);
        localStorage.setItem("Pricing Details",JSON.stringify(cart));
       
      }
     
       else {
        alert("Product is already added")
        
       
      }
        })
        let li=document.createElement("li")
        li.innerText=el.a;
        let li2=document.createElement("li")
        li2.innerText=el.b
        let li3=document.createElement("li")
        li3.innerText=el.c


        box.append(name,offer,rating, price,hr,li,li2,li3,addToCard,img)
        cont.append(box);
    })
}

detail(details)



function addToCardfun(id){
    for(let i=0;i<cart.length;i++){
       if(cart[i].offer==id){
        return false;
       } 
       
    } 
     return true;
    
    }
