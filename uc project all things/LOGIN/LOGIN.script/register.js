
  let form=document.getElementById("frm").addEventListener("submit", callfun);
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
    if(checkEmail(obj.email)==true){
        data.push(obj);
        localStorage.setItem("createaccount", JSON.stringify(data));

    }else{
        alert("Account already exists");
    }
    function checkEmail(email){
        let filtered=data.filter(function(elem){
            return email===elem.email;
        })
        if(filtered.length>0){
            return false;
        }else{
            return true;
        }
    }
    window.location.href = "signin.html";
    console.log(data);
  }
