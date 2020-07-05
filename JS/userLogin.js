
// let login_bg = document.getElementById("login_bg");
// let wrap = document.getElementById("wrap");
// let con = document.getElementById("con");
// let login_bg_w = window.getComputedStyle(login_bg).width;
// // let login_bg_h1 = login_bg.clientWidth; //死的不动

// // wrap.style.width = "calc(100% - 500px)";eeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaasssss
// login_bg.style.height = window.innerHeight+"px";
// // wrap.style.width = parseInt(window.innerWidth) - parseInt(login_bg_w) - 70 +"px";
// // window.onload = function(){
// //     login_bg.style.height = document.documentElement.clientWidth+"px";
// // }//这个方法不好用

// // wrap.style.width = "calc(100% - login_bg_w)";
// window.onresize = function (){
//     login_bg_w = window.getComputedStyle(login_bg).width;
//     login_bg.style.height = window.innerHeight+"px";
//     // wrap.style.width = parseInt(window.innerWidth) - parseInt(login_bg_w) - 70 +"px";
//     // wrap.style.width = "calc("+100%-login_bg_w+")";
    
//     // wrap.style.width = "calc(100% - 500px)";
//     // "(50% -"+div.clientWidth/2+"px)"
// }

let button = document.getElementById("button");
button.onclick=function(){
    var userLogin=new XMLHttpRequest();
        userLogin.open('get','http://127.0.0.1/lol/php/userLogin.php?username=fuck&password=1111&phone=2222&code=3333&_='+Date.now());
        userLogin.send(null);
        userLogin.onreadystatechange=function (){
            if (userLogin.readyState==4) { 
                if (userLogin.status==200) { 
                    let json = JSON.parse(userLogin.responseText);
                    console.log(userLogin.responseText);
                    console.log("**************************************************");
                    console.log(json);
                    
                    // 打印结果不一样
                    // console.log(userLogin.responseText);
                    // document.getElementById("show").innerHTML=userLogin.responseText;
                    
                } else{
                    alert( userLogin.status +'请求失败' );
                };
            };
        } 
}