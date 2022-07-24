let id = document.getElementById('mearge')

let fromLs = JSON.parse(localStorage.getItem("createaccount"));
if(fromLs[0]['name']){
    id.innerText=fromLs[0]['name']
}
else{
    id.innerText='Log-In/Sign-Up'
}
console.log(fromLs)


