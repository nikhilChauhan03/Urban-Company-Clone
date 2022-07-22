
// for address box pop up

// on click cross icon;
document.querySelector("#nikhil_cross").addEventListener("click", addressPopClose)

function addressPopClose() {
    document.querySelector(".nikhil_address_container").classList.remove("active")
}

//on click add address button
document.querySelector(".nikhil_add_address").addEventListener("click", addressPop)
let count = 1;
function addressPop() {
    count++
    let btn = document.querySelector(".nikhil_address_container")
    if (count % 2 === 0) {
        btn.classList.add("active")
    }
    else {
        btn.classList.remove("active")
    }

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

