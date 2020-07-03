let a =document.querySelector("#user_box a")
let login =document.getElementById("login")
let login_close = document.querySelector("#login i")
let btn = document.getElementsByClassName("btn")
let login_saoma =document.getElementById("login_saoma")
let login_mima =document.getElementById("login_mima")
a.onclick = function(){
    login.style.display="block";
}
login_close.onclick = function(){
    login.style.display="none";
}
btn[0].onclick = function(){
    login_mima.style.display="none";
    login_saoma.style.display="block";
    btn[1].innerHTML="帐号密码登录";
}
btn[1].onclick = function(){
    // btn[1].innerHTML="<a herf='https://aq.qq.com/v2/uv_aq/html/reset_pwd/pc_reset_pwd_input_account.html?v=3.0&old_ver_account='>忘记密码?</a>";
    btn[1].innerHTML="忘记密码?";
    // btn[1].href="https://aq.qq.com/v2/uv_aq/html/reset_pwd/pc_reset_pwd_input_account.html"; //直接跳转了
    login_saoma.style.display="none";
    login_mima.style.display="block";
}