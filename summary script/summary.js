
// for address box pop up

// on click cross icon;
document.querySelector("#nikhil_cross").addEventListener("click", addressPopClose)

function addressPopClose() {
    document.querySelector(".nikhil_address_container").classList.remove("active")
}

//on click add address button
document.querySelector(".nikhil_add_address").addEventListener("click", addressPop)

function addressPop() {

    let btn = document.querySelector(".nikhil_address_container")
  
        btn.classList.add("active")
    

    // this is for removing all the value of input boxes
    let get_address_data = (identity) => {
        let x = document.querySelector(identity)
        return x;
    }

    get_address_data(".nikhil_name").value = null;
    get_address_data(".nikhil_pincode").value = null;
    get_address_data(".nikhil_mobile").value = null;
    get_address_data(".nikhil_locality").value = null;
    get_address_data(".nikhi_area").value = null;
    get_address_data(".nikhil_city").value = null;
    get_address_data(".nikhil_landmark").value = null;
    get_address_data(".nikhil_states").value = null;
    get_address_data(".nikhil_locality").value = null;
}
//////////////////////////////////////////////////////





// address store in the local system ////////////////////////////
let addressData = JSON.parse(localStorage.getItem("addressData")) || []
class obj {

    constructor(name, mobile, pin, area, land, alter, city, state, local) {
        this.name = name;
        this.mobile = mobile;
        this.pincode = pin;
        this.area = area;
        this.locality = local;
        this.alternate = alter;
        this.city = city;
        this.state = state;
        this.landmark = land;
    }

}

saveAddress = () => {
    // event.preventDefault()
    let get_address_data = (identity) => {
        let x = document.querySelector(identity)
        return x;
    }

    let name = get_address_data(".nikhil_name").value;
    let mobile = get_address_data(".nikhil_pincode").value;
    let pincode = get_address_data(".nikhil_mobile").value;
    let area = get_address_data(".nikhil_locality").value;
    let locality = get_address_data(".nikhi_area").value;
    let alternate = get_address_data(".nikhil_city").value;
    let city = get_address_data(".nikhil_landmark").value;
    let state = get_address_data(".nikhil_states").value;
    let landmark = get_address_data(".nikhil_locality").value;

    // getting the data and store it into local storage;
    let d1 = new obj(name, mobile, pincode, area, locality, alternate, city, state, landmark)
    addressData.push(d1)
    localStorage.setItem("addressData", JSON.stringify(addressData))



    // get the address box where i have to append the data;
    let addressBox = document.querySelector(".nikhil_address_insdie_box")
    addressBox.innerHTML = null

    // creating the p tag where i can insert the address;
    let para = document.createElement("p")
    para.setAttribute("class", 'nikhil_address_para')
    para.innerText = ` ${name} ${area} ${landmark} ${locality} ${city} ${pincode}...`

    // creating the button to change the address;
    let button = document.createElement("button")
    button.innerText = "Change"
    button.addEventListener("click", () => // function to on click change button open the address popup
    {
        document.querySelector(".nikhil_address_container").classList.add("active")
    })
    button.setAttribute("class", "nikhil_change_address_to_para")


    //append the data to address button
    addressBox.append(para, button)
    addressBox.style.visibility = "visible"
}


///////////////////////////////////////////////////////////////////////////////////

// arrow to previous page/////
function previousPage() {

    window.location.href = "payment1.html"

}


//adding data to data countanier

let totalPrice = 0;
let n = 1;

let data = JSON.parse(localStorage.getItem("user_details"))
console.log(data)

displayLayout(data)

function displayLayout(data) {

    let container = document.querySelector(".nikhil_product_details_contaienr")
    data.forEach((el) => {
        let price = el.p

        let div = document.createElement("div")
        div.setAttribute("class", "nikhil_all_content_title_button")



        let div2 = document.createElement("div")
        div2.setAttribute("class", "nikhil_title_button_flex")


        let para1 = document.createElement("p")
        para1.innerText = el.data;
        para1.setAttribute("class", "nikhil_service_name")


        let div3 = document.createElement("div")
        div3.setAttribute("class", "nikhil_button_plus_minus")

        btn1 = document.createElement("button")
        btn1.innerText = "-"
        btn1.setAttribute("class", "nikhil_minus")
        btn1.addEventListener("click", function () {
            if (n > 1) {
                n--
                document.querySelector(".nikhil_digit").innerText = n

                price = price - el.p
                para2.innerText = `₹ ${price}`
                totalPrice -= Number(el.p)


                let fullprice = document.querySelector(".nikhil_product_price")
                fullprice.innerText = `₹ ${totalPrice}`

                let endTotal = document.querySelector(".nikhil_all_total_number")
                let tip = document.querySelector(".nikhil_tip_price").innerText
                let conv = document.querySelector(".nikhil_fee").innerText
                let plus = document.querySelector(".nikhil_membership_fee").innerText
                endTotal.innerText = Number(totalPrice) + Number(tip) + Number(conv) + Number(plus)
                localStorage.setItem("endTotal", JSON.stringify(endTotal.innerText))

                endTotal.innerText = "₹" + " " + endTotal.innerText

            }


        })

        head = document.createElement("h3")
        head.innerText = n


        head.setAttribute("class", "nikhil_digit")

        btn2 = document.createElement("button")
        btn2.innerText = "+"
        btn2.setAttribute("class", "nikhil_plus")
        btn2.addEventListener("click", function () {
            if (n < 3) {
                n++
                price = Number(price) + Number(el.p)
                para2.innerText = `₹ ${price}`
                totalPrice += Number(el.p)
                document.querySelector(".nikhil_digit").innerText = n


                let fullprice = document.querySelector(".nikhil_product_price")
                fullprice.innerText = `₹ ${totalPrice}`


                let endTotal = document.querySelector(".nikhil_all_total_number")
                let tip = document.querySelector(".nikhil_tip_price").innerText
                let conv = document.querySelector(".nikhil_fee").innerText
                let plus = document.querySelector(".nikhil_membership_fee").innerText
                endTotal.innerText = Number(totalPrice) + Number(tip) + Number(conv) + Number(plus)
                localStorage.setItem("endTotal", JSON.stringify(endTotal.innerText))

                endTotal.innerText = "₹" + " " + endTotal.innerText

            }

        })


        div3.append(btn1, head, btn2)
        div2.append(para1, div3)


        let div4 = document.createElement("div")
        div4.setAttribute("class", "nikhil_amount_title")

        let para2 = document.createElement("div")
        para2.setAttribute("class", "nikhil_price_titile")
        para2.innerText = `₹ ${price}`
        totalPrice += Number(price)

        div4.append(para2)

        div.append(div2, div4)
        container.append(div)


        let detailsDiv = document.createElement("div")
        detailsDiv.setAttribute("class", "nikhil_details_in_container")

        let detailsPara = document.createElement("p")
        detailsPara.innerText = el.main_part111

        let detailsPara2 = document.createElement("p")
        detailsPara2.innerText = el.main_part122

        detailsDiv.append(detailsPara, detailsPara2)
        container.append(detailsDiv)
        console.log(totalPrice)

    })



}


////////////////////////adding data of fai //////////////////
class object {

    constructor(data, des1, des2, p) {

        this.data = data;
        this.main_part111 = des1;
        this.main_part122 = des2;
        this.p = p;

    }

}

let user_details = JSON.parse(localStorage.getItem("user_details")) || []
function one() {

    let data = document.querySelector(".heading").innerText
    let main_part111 = ". Beared shaping and styling"
    let main_part122 = ". Trimmer instead of Razzer"
    let p = document.querySelector(".p").innerText

    let d1 = new object(data, main_part111, main_part122, p)
    user_details.push(d1)

    let flag = true;
    for (let i = 0; i < user_details.length; i++) {
        if (d1.data === user_details[i]["data"]) {
            flag == false;
            alert("this item is already added")

            return flag
        }
    }

    if (flag) {
        localStorage.setItem("user_details", JSON.stringify(user_details))
        window.location.reload()
    }



}

function two() {

    let data = document.querySelector(".heading1").innerText
    let main_part111 = ". Head massage for 10 minutes"
    let main_part122 = ". oinling head with almond oil"
    let p = document.querySelector(".p1").innerText

    let d1 = new object(data, main_part111, main_part122, p)
    user_details.push(d1)



    let flag = true;
    for (let i = 0; i < user_details.length; i++) {
        if (d1.data === user_details[i]["data"]) {
            flag == false;
            alert("this item is already added")

            return flag
        }
    }

    if (flag) {
        localStorage.setItem("user_details", JSON.stringify(user_details))
        window.location.reload()
    }

}

function three() {

    let data = document.querySelector(".heading2").innerText
    let main_part111 = ". Clean shave"
    let main_part122 = ". massage of face for 5 minutes"
    let p = document.querySelector(".p2").innerText

    let d1 = new object(data, main_part111, main_part122, p)
    user_details.push(d1)

    let flag = true;
    for (let i = 0; i < user_details.length; i++) {
        if (d1.data === user_details[i]["data"]) {
            flag == false;
            alert("this item is already added")

            return flag
        }
    }

    if (flag) {
        localStorage.setItem("user_details", JSON.stringify(user_details))
        window.location.reload()
    }


}

function four() {

    let data = document.querySelector(".heading3").innerText
    let main_part111 = ". Proper Hiar color"
    let main_part122 = ". Full grey hair coverage"
    let p = document.querySelector(".p3").innerText

    let d1 = new object(data, main_part111, main_part122, p)

    let flag = true;
    for (let i = 0; i < user_details.length; i++) {
        if (d1.data === user_details[i]["data"]) {
            flag == false;
            alert("this item is already added")

            return flag
        }
    }

    if (flag) {
        user_details.push(d1)
        localStorage.setItem("user_details", JSON.stringify(user_details))
        window.location.reload()
    }


}


let fullprice = document.querySelector(".nikhil_product_price")
fullprice.innerText = `₹ ${totalPrice}`


let endTotal = document.querySelector(".nikhil_all_total_number")
let tip = document.querySelector(".nikhil_tip_price").innerText
let conv = document.querySelector(".nikhil_fee").innerText
let plus = document.querySelector(".nikhil_membership_fee").innerText
endTotal.innerText = Number(totalPrice) + Number(tip) + Number(conv) + Number(plus)
localStorage.setItem("endTotal", JSON.stringify(endTotal.innerText))

endTotal.innerText = "₹" + " " + endTotal.innerText

// const faqs = document.querySelectorAll(".nikhil_adding_small_tip_box");

// faqs.forEach((el) => {
//     el.addEventListener("click", () => {
//         el.classList.toggle("active");
//     })
// })


// adding tips via buttons
function thirty()
{

    document.querySelector(".nikhil_tip_price").innerText = 30
    let endTotal = document.querySelector(".nikhil_all_total_number")
    let tip = document.querySelector(".nikhil_tip_price").innerText
    let conv = document.querySelector(".nikhil_fee").innerText
    let plus = document.querySelector(".nikhil_membership_fee").innerText
    endTotal.innerText = Number(totalPrice) + Number(tip) + Number(conv) + Number(plus)
    localStorage.setItem("endTotal", JSON.stringify(endTotal.innerText))

    endTotal.innerText = "₹" + " " + endTotal.innerText
}

function fifty() {
    document.querySelector(".nikhil_tip_price").innerText = 50
    let endTotal = document.querySelector(".nikhil_all_total_number")
    let tip = document.querySelector(".nikhil_tip_price").innerText
    let conv = document.querySelector(".nikhil_fee").innerText
    let plus = document.querySelector(".nikhil_membership_fee").innerText
    endTotal.innerText = Number(totalPrice) + Number(tip) + Number(conv) + Number(plus)
    localStorage.setItem("endTotal", JSON.stringify(endTotal.innerText))

    endTotal.innerText = "₹" + " " + endTotal.innerText
}

function hund() {
    document.querySelector(".nikhil_tip_price").innerText = 100
    let endTotal = document.querySelector(".nikhil_all_total_number")
    let tip = document.querySelector(".nikhil_tip_price").innerText
    let conv = document.querySelector(".nikhil_fee").innerText
    let plus = document.querySelector(".nikhil_membership_fee").innerText
    endTotal.innerText = Number(totalPrice) + Number(tip) + Number(conv) + Number(plus)
    localStorage.setItem("endTotal", JSON.stringify(endTotal.innerText))

    endTotal.innerText = "₹" + " " + endTotal.innerText
}

function onefive() {
    document.querySelector(".nikhil_tip_price").innerText = 150
    let endTotal = document.querySelector(".nikhil_all_total_number")
    let tip = document.querySelector(".nikhil_tip_price").innerText
    let conv = document.querySelector(".nikhil_fee").innerText
    let plus = document.querySelector(".nikhil_membership_fee").innerText
    endTotal.innerText = Number(totalPrice) + Number(tip) + Number(conv) + Number(plus)
    localStorage.setItem("endTotal", JSON.stringify(endTotal.innerText) )

    endTotal.innerText = "₹" + " " + endTotal.innerText
}

// let endTotal = document.querySelector(".nikhil_all_total_number")
let pay = document.querySelector(".nikhl_add_address_and_slot")
pay.innerText = `Pay ${endTotal.innerText}`


// let's move to next page...............

function nextPayment()
{
    window.location.href = "paymentGateway.html"
}




// plus membership add or remove//////////////////
let count = 0;
function removebtn()
{

    let text = document.querySelector(".nikhil_change_text")
   
    count++
    if(count % 2 == 1)
    {
        text.innerText = "Add"
        // document.querySelector(".nikhil_tip_price").innerText = 150
        let endTotal = document.querySelector(".nikhil_all_total_number")
        let tip = document.querySelector(".nikhil_tip_price").innerText
        let conv = document.querySelector(".nikhil_fee").innerText
        let plus = document.querySelector(".nikhil_membership_fee")
        plus.innerText = 0
        endTotal.innerText = Number(totalPrice) + Number(tip) + Number(conv) + Number(plus.innerText)
        localStorage.setItem("endTotal", JSON.stringify(endTotal.innerText))

        endTotal.innerText = "₹" + " " + endTotal.innerText
    }
    else
    {
        text.innerText  = "Remove"
        let endTotal = document.querySelector(".nikhil_all_total_number")
        let tip = document.querySelector(".nikhil_tip_price").innerText
        let conv = document.querySelector(".nikhil_fee").innerText
        let plus = document.querySelector(".nikhil_membership_fee")
        plus.innerText = 299
        endTotal.innerText = Number(totalPrice) + Number(tip) + Number(conv) + Number(plus.innerText)
        localStorage.setItem("endTotal", JSON.stringify(endTotal.innerText))

        endTotal.innerText = "₹" + " " + endTotal.innerText
    }

}