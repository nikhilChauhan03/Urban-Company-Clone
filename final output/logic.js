let id = document.getElementById('mearge')

let fromLs = JSON.parse(localStorage.getItem("createaccount"));
if(fromLs[0]['name']){
    id.innerText=fromLs[0]['name']
}
else{
    id.innerText='Log-In/Sign-Up'
}
console.log(fromLs)

function redirect()
{
    window.location.href = "http://127.0.0.1:5501/final%20output/MenSalon/mensalon.html"


}


function redirect2()
{

    window.location.href = "http://127.0.0.1:5501/uc%20project%20all%20things/women.html"
}