const faqs = document.querySelectorAll(".nikhil_faq_select");

faqs.forEach((el)=>{
    el.addEventListener("click", ()=>{
        el.classList.toggle("active");
    })
})


// estimate price in green color
// ///////////////////////////////////////////////////////////////////
// let arr = [{
//     data:"Hari cut + face mask",
//     main_part111: "face & Neck Detan Pack",
//     main_part122: "Main's Haircut",
//     p:"550",
// }]
// localStorage.setItem("user_details",JSON.stringify(arr))
// ////////////////////////////////////////////////////////////////////////////////


let userData = JSON.parse(localStorage.getItem("user_details"))
console.log(userData)
let greenPrice = document.querySelector(".nikhil_green_price")
greenPrice.innerText = `₹ ${288}`

// number of services per year button;
function two()
{



    greenPrice.innerText = `₹ ${288}`

}

function four() {

    let sum = 0;
    for (let i = 0; i < 2; i++) {
        sum += Number(288)
    }

    greenPrice.innerText = `₹ ${sum}`

}

function six() {

    let sum = 0;
    for (let i = 0; i < 3; i++) {
        sum += Number(288)
    }

    greenPrice.innerText = `₹ ${sum}`

}

function eight() {

    let sum = 0;
    for (let i = 0; i < 4; i++) {
        sum += Number(288)
    }

    greenPrice.innerText = `₹ ${sum}`

}

function ten() {

    let sum = 0;
    for (let i = 0; i < 5; i++) {
        sum += Number(288)
    }

    greenPrice.innerText = `₹ ${sum}`

}

function twelev() {

    let sum = 0;
    for (let i = 0; i < 6; i++) {
        sum += Number(288)
    }

    greenPrice.innerText = `₹ ${sum}`

}

// lets make total price;
let total_price = 0;

userData.forEach((el)=>
{
    total_price += Number(el.p)
})



// right side two buttons functionality;

let tweleveMonthPrice = document.querySelector(".nikhil_twelev_month_btn_plan")
let sixMonthPrice = document.querySelector(".nikhil_six_month_btn_plan")
total_price += Number(tweleveMonthPrice.innerText)
console.log(total_price)
console.log(Number(sixMonthPrice.innerText) + total_price)


let countT = 0;

function twelve_month_btn(){

    countT++

    if(countT % 2 == 0)
    {

        total_price += Number(tweleveMonthPrice.innerText)
        document.querySelector(".nikhil_twelve_month_member").innerText = "Remove"

    }
    else{
        total_price -= Number(tweleveMonthPrice.innerText)
        document.querySelector(".nikhil_twelve_month_member").innerText = "Add"
    }

    let total_priceLS = localStorage.setItem("total_price", total_price)

    let finalPay = document.querySelector(".nikhil_ready_to_pay")
    finalPay.innerText = `₹ ${total_price}`

    let discount = document.querySelector(".nikhil_disscount_of_sixeight")
    discount.innerText = `₹ ${Number(total_price) + 68}`

}

let countS = 0
function six_month_btn()
{
    countS++

    if (countS % 2 == 1) {

        total_price += Number(sixMonthPrice.innerText)
        document.querySelector(".nikhil_six_month_member").innerText = "Remove"

    }
    else {
        total_price -= Number(sixMonthPrice.innerText)
        document.querySelector(".nikhil_six_month_member").innerText = "Add"
    }

    let total_priceLS = localStorage.setItem("total_price", total_price)

    let finalPay = document.querySelector(".nikhil_ready_to_pay")
    finalPay.innerText = `₹ ${total_price}`

    let discount = document.querySelector(".nikhil_disscount_of_sixeight")
    discount.innerText = `₹ ${Number(total_price) + 68}`
}



let finalPay = document.querySelector(".nikhil_ready_to_pay")
finalPay.innerText = `₹ ${total_price}`

let discount = document.querySelector(".nikhil_disscount_of_sixeight")
discount.innerText = `₹ ${Number(total_price) + 68}`


function nextpage()
{
window.location.href = "summary.html"
}