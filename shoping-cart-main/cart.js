let data=JSON.parse(localStorage.getItem("card_item"));
showData(data)

function showData(arr){
    var sum=0;
    arr.forEach(function(elm,index){
    
       
        let image=document.createElement("img");
        image.src=elm.image;
   
        let name=document.createElement("p");
        name.innerText=elm.name;
        
        let price=document.createElement("p");
        price.innerText=elm.price;
        sum+=(Number(price.innerText))
        let button =document.createElement("input");
        button.type="button";
        button.value="Remove";
        button.classList="remove"
        button.addEventListener("click",function(){
            dlt(index)
        })
       
        
     
        document.querySelector("#card_total").innerText=sum
       let div= document.createElement("div");
       div.id="card";;
       div.append(image,name,price,button)
       document.querySelector("#total_div").append(div)
    })
    }
    function dlt(index){
        console.log(data)
        data.splice(index,1);
        localStorage.setItem("card_item",JSON.stringify(data));
        window.location.reload()
    }
   


