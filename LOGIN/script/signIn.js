
  var data = JSON.parse(localStorage.getItem("createaccount"));

  var frm = document.getElementById("frm");
  frm.addEventListener("submit", signin);

  function signin(event) {
    event.preventDefault();
    var email1 = document.getElementById("email").value;
    var pass1 = document.getElementById("password").value;
    var c = 0;
    for (i = 0; i < data.length; i++) {
      if (data[i].email == email1.value && data[i].password == pass1.value) {
        alert("Invalid credential");
        window.location.href = "index.html";
      } else {
        c++;
        alert("Sign In success");
        break;
      }
    }
    if (c == data.length) {
      window.location.href = "navbar.html";
      alert("Sign In success");
      // alert("Invalid credential");
    }
  }
