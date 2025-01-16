var user=document.getElementById("username");
var pass=document.getElementById("password");
var login=document.getElementById("login");
        
function log(){
    var us = username.value;
    var ps = password.value;
        if(us == "" || ps =="" ){
            alert("帳號密碼不能空");
            return false;
            
        }else if(us != "emma"){
            alert("帳號錯誤");
            return false;
        }else if(ps != "amy159357"){
            alert("密碼錯誤");
            return false;
        }else{
            //document.getElementById('login').alert = "登入成功";
            window.location.href='file:///Users/amy/Desktop/vs%20code/page.html';
        }
}
