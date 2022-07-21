

document.querySelector("#nikhil_cross").addEventListener("click", addressPop)

document.querySelector(".nikhil_add_address").addEventListener("click",addressPop)
let count = 1;
function addressPop(){
    count++
    let btn = document.querySelector(".nikhil_address_container")
    if(count%2===0)
    {
        btn.classList.add("active")
    }
    else{
        btn.classList.remove("active")
    }
}