
let button = document.querySelector(".nikhil_logo_arrow")

button.addEventListener("click",nextpay)

function nextpay()
{

    let gif = document.createElement('img')
    gif.src = "https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
    gif.setAttribute("class","nikhil_add_loading_logo")
    let body = document.querySelector("body")
    body.append(gif)
    body.style.background = "rgba(0, 0, 0, 0.5)"

    setTimeout(()=>
    {
        window.location.href = "paymentSuccessful.htm"
    },3000)
}