
  let form=document.getElementById("frm").addEventListener("submit", callfun);
  var data = JSON.parse(localStorage.getItem("createaccount")) || [];

  function callfun(event) {
    event.preventDefault();
    // var data = [];
    var email = document.getElementById("email").value;
    // var name = document.getElementById("name").value
    var pass = document.getElementById("password").value
    var obj = {
      email: email,
      // name: name,
      pass: pass,
    };
    if(checkSignin(obj.email,obj.pass)==true){
        data.push(obj);
        localStorage.setItem("createaccount", JSON.stringify(data));
        alert("SignIn success");
        window.location.href="../../final output/home.html";
    }else{
        alert("Wrong username or password");
    }
  }
    function checkSignin(email,pass){
        let filter=data.filter(function(elem){
            return elem.email===email && elem.pass===pass;
        })
        if(filter.length>0){
          return true;
        }else{
          return false;
        }
    }
    
  































// var data = JSON.parse(localStorage.getItem("createaccount"));

// var frm = document.getElementById("frm");
// frm.addEventListener("submit", signin);

// function signin(event) {
//   event.preventDefault();
//   var email1 = document.getElementById("email").value;
//   var pass1 = document.getElementById("password").value;
//   var c = 0;
//   for (i = 0; i <data.length; i++) {
//     if (data[i].email == email1.value && data[i].password == pass1.value) {
//       alert("Invalid credential");
//       window.location.href = "index.html";
//     } else {
//       c++;
//       alert("Sign In success");
//       break;
//     }
//   }
//   if (c == data.length) {
//     window.location.href = "navbar.html";
//     // alert("Sign In success");
//     alert("Invalid credential");
//   }
// }