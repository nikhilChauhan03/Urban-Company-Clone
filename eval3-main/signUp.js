let btn = document.getElementById("signup");
btn.addEventListener("click",save)
let arr = JSON.parse(localStorage.getItem("users"))||[];
function save(event){
    event.preventDefault();
    let obj = {};
    obj.name = document.getElementById("name").value
    obj.email = document.getElementById("email").value ;
    obj.password = document.getElementById("password").value; 
    arr.push(obj);
   localStorage.setItem("users",JSON.stringify(arr))
   window.location.href="login.html";
}