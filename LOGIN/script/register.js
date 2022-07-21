
  document.getElementById("frm").addEventListener("submit", callfun);
  var data = JSON.parse(localStorage.getItem("createaccount")) || [];

  function callfun(event) {
    event.preventDefault();
    // var data = [];
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value
    var pass = document.getElementById("password").value
    var obj = {
      email: email,
      name: name,
      pass: pass,
    };
    data.push(obj);
    localStorage.setItem("createaccount", JSON.stringify(data));
    window.location.href = "signin.html";
    console.log(data);
  }
