let hotels = [];
document.querySelector("#query").addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    let val = document.querySelector("#query").value;
    GetData(val);
  }
});
async function GetData(query) {
  let url = `https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`;
  const res = await fetch(url);
  let data = await res.json();
  hotels = data.hotels;
  append(data.hotels);
}
// document.addEventListener("#sort_lth").addEventListener("click",function(){
//     console.log("A")
// })

function append(arr) {
  arr.forEach((elm) => {
    let img = document.createElement("img");

    img.src = elm.Images.one;
    let name = document.createElement("p");
    name.innerText = elm.Title;
    let price = document.createElement("p");
    price.innerText = `price-${elm.Price}`;
    let ac = document.createElement("p");
    ac.innerText = `Ac-${elm.Ac}`;
    let rating = document.createElement("p");
    rating.innerText = `Rating- ${elm.Rating}`;
    let div = document.createElement("div");
    div.id = "hotel";
    let book = document.createElement("input");
    book.type = "button";
    book.value = "Book now";
    book.className = "book";

    book.addEventListener("click", function () {
      let logIn = localStorage.getItem("logIn");
      console.log(logIn);
      if (logIn == "true") {
        localStorage.setItem("checkOut", JSON.stringify(elm));
        console.log(localStorage);
        window.location.replace("./checkout.html");
      } else {
        alert("User Not Login,kindly login");
        window.location.replace("./login.html");
      }
    });
    div.append(img, name, price, rating, ac, book);
    document.querySelector("#hotels_list").append(div);
  });
}

const lth = () => {
  const hotel_list = document.getElementById("hotels_list");
  hotel_list.innerHTML = "";
  const lthHotels = hotels.sort((a, b) => a.Price - b.Price);
  append(lthHotels);
};

const htl = () => {
  const hotel_list = document.getElementById("hotels_list");
  hotel_list.innerHTML = "";
  const lthHotels = hotels.sort((a, b) => b.Price - a.Price);
  append(lthHotels);
};

const ac = () => {
  const hotel_list = document.getElementById("hotels_list");
  hotel_list.innerHTML = "";
  const lthHotels = hotels.filter((hotel) => !hotel.Ac);
  append(lthHotels);
};

const nonac = () => {
  const hotel_list = document.getElementById("hotels_list");
  hotel_list.innerHTML = "";
  const lthHotels = hotels.filter((hotel) => hotel.Ac);
  append(lthHotels);
};
