let data = JSON.parse(localStorage.getItem("users"));

 let btn = document.getElementById("login");
 btn.addEventListener("click",login);
 localStorage.setItem("logIn",false)

 function login(event){
    if(data==null){
        alert("User not exist")
    }
    let count=0;
     event.preventDefault();
     let emai = document.getElementById('email').value 
     let pass = document.getElementById("password").value 
     data.forEach(elm => {
     if(emai==elm.email){
        if(pass==elm.password){
            alert("login successful");
            localStorage.setItem("logIn",true)
            count++;
            window.location.href="index.html";
        }else{
            alert("check your password")
            localStorage.setItem("logIn",false)
            count++;
        }
     }
  

     });
     if(count==0){
        alert("User not exist")
        localStorage.setItem("logIn",false)
     }
    }