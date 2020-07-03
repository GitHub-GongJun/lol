
let login_bg = document.getElementById("login_bg");
let wrap = document.getElementById("wrap");
let con = document.getElementById("con");
let login_bg_w = window.getComputedStyle(login_bg).width;
// let login_bg_h1 = login_bg.clientWidth; //死的不动

// wrap.style.width = "calc(100% - 500px)";eeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaasssss
login_bg.style.height = window.innerHeight+"px";
// wrap.style.width = parseInt(window.innerWidth) - parseInt(login_bg_w) - 70 +"px";
// window.onload = function(){
//     login_bg.style.height = document.documentElement.clientWidth+"px";
// }//这个方法不好用

// wrap.style.width = "calc(100% - login_bg_w)";
window.onresize = function (){
    login_bg_w = window.getComputedStyle(login_bg).width;
    login_bg.style.height = window.innerHeight+"px";
    // wrap.style.width = parseInt(window.innerWidth) - parseInt(login_bg_w) - 70 +"px";
    // wrap.style.width = "calc("+100%-login_bg_w+")";
    
    // wrap.style.width = "calc(100% - 500px)";
    // "(50% -"+div.clientWidth/2+"px)"
}