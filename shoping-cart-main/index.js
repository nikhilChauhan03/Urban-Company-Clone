let url="https://grocery-masai.herokuapp.com/items";
fetch(url).then(function(res){
return res.json()
}).then(function(res){
   showData(res.data)
})


let newArr=[]
function showData(arr){
arr.forEach(function(elm){
  
    let image=document.createElement("img");
    image.src=elm.image;

    let name=document.createElement("p");
    name.innerText=elm.name;
    let price=document.createElement("p");
    price.innerText=elm.price;
    // console.log(name,price)
    let button =document.createElement("input");
    button.type="button";
    button.className="add_to_cart"
    button.value="Add to cart"
    button.addEventListener("click",function(){
        click(elm);
       
    });
    
    function click(elm){
       
        let wallet=Number(document.querySelector("#wallet").innerText);
        // console.log(typeof wallet);
        let p=Number(price.innerText);
        // console.log(p);
        if(wallet>=p){
            wallet=wallet-p;
            document.querySelector("#wallet").innerText=wallet;
            newArr.push(elm);
            localStorage.setItem("card_item",JSON.stringify(newArr));
           
          
        }
        else{
            alert("Insufficient wallet money")
        }
        
        
    }
    let div=document.createElement("div");
    div.className="item";
    
    // console.log(img,name,price,button)
    div.append(image,name,price,button);
    document.querySelector("#groceries").append(div)
})
}

