document.querySelector("form").addEventListener("submit",function(event){
event.preventDefault()
cnf();
    function cnf(){
        alert("Your order is confirm");
    }
    setTimeout(function (){
        alert("Your order is being packed")
    },3000);
    setTimeout(function (){
        alert("Your order is in transit")
    },8000);
    setTimeout(function (){
        alert("Your order is being out for delivery")
    },10000);
    setTimeout(function (){
        alert("order delivered")
    },12000);

})