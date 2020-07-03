let banner_name = document.getElementById("banner_name");
let banner_img = document.getElementById("banner_img");
let i = 0 ;
let j = 0 ;
for (let index = 0; index < 5; index++) {
// for (let index = 0; index < banner_name.children.length; index++) {
    banner_name.children[index].onmousemove = function(){
        banner_img.style.left=-index*780+"px";
        // 替代：hover 改变li样式
        banner_name.children[j].style.borderBottom= "2px solid #e3e2e2";
        banner_name.children[j].style.color= "#424242";
        banner_name.children[j].style.backgroundColor= "#e3e2e2";
        banner_name.children[index].style.borderBottom= "2px solid rgb(206, 168, 97)";
        banner_name.children[index].style.color= "#ab8e66";
        banner_name.children[index].style.backgroundColor= "white";
        i = index;
        j=i;
    }
}
var banner_time = setInterval(function (){
    //  改变li样式
    banner_name.children[j].style.borderBottom= "2px solid #e3e2e2";
    banner_name.children[j].style.color= "#424242";
    banner_name.children[j].style.backgroundColor= "#e3e2e2";
    banner_name.children[i].style.borderBottom= "2px solid rgb(206, 168, 97)";
    banner_name.children[i].style.color= "#ab8e66";
    banner_name.children[i].style.backgroundColor= "white";
    banner_img.style.left=-i*780+"px";
    j=i;
    i<4 ? i++ : i=0;
    // console.log("下一个="+i ,"当前="+j);
},3000);
// clearInterval(banner_time);\
//轮播图数据
let xhr_banner=new XMLHttpRequest();
xhr_banner.open('get', './DATA/index_banner2.json?_=' + Date.now());
xhr_banner.send(null);
xhr_banner.onreadystatechange = function () {
    if (xhr_banner.readyState == 4) {
        if (xhr_banner.status == 200) {
            let json = JSON.parse(xhr_banner.responseText);
            for (let index = 0, json_length = 5/*json.length*/; index < json_length; index++) {//只取前5个
                banner_img.children[index].href = json[index].a_href;
                banner_img.children[index].children[0].src = json[index].img_src;
                banner_name.children[index].innerHTML = json[index].name;
            }
        } else {
            alert(xhr_banner.status + '请求失败');
        };
    };
}  
//tab1数据---
let tab1_ul_li = document.querySelectorAll("#wrap1 .tab1 ul li");
let tab1_dl = document.querySelector("#wrap1 .tab1 dl");
// 初始化---
let tab_index = 0;
tab1_ul_li[tab_index].style.fontWeight= "700";
tab1_ul_li[tab_index].style.color= "#1da6ba";
tab1_ul_li[tab_index].style.borderBottom = "7px solid rgba(0, 0, 0, 0)";
// ---初始化
for(let i = 0 ;i<5;i++){
    tab1_ul_li[i].onmousemove = function(){
        tab1_ul_li[tab_index].style.fontWeight = "500";
        tab1_ul_li[tab_index].style.color= "#676767";
        tab1_ul_li[tab_index].style.borderBottom = "7px solid #eeeeee";
        tab1_ul_li[i].style.fontWeight= "700";
        tab1_ul_li[i].style.color= "#1da6ba";
        tab1_ul_li[i].style.borderBottom = "7px solid rgba(0, 0, 0, 0)";
        tab_index=i;
    }
}
let xhr_tab1=new XMLHttpRequest();
xhr_tab1.open('get', './DATA/wrap1_tab1.json?_=' + Date.now());
xhr_tab1.send(null);
xhr_tab1.onreadystatechange = function () {
    if (xhr_tab1.readyState == 4) {
        if (xhr_tab1.status == 200) {
            let json = JSON.parse(xhr_tab1.responseText);
            // tab1_ul_li[0].innerHTML = json.zonghe[1].title;

            tab1_dl.children[0].children[0].innerHTML = json.zonghe[0].title;
            /*
            tab1_dl.children[1].className = json.zonghe[1].class;
            // tab1_dl.children[1].class = json.zonghe[1].class; //不可以
            tab1_dl.children[1].children[1].href = json.zonghe[1].a_href;
            tab1_dl.children[1].children[1].innerHTML = json.zonghe[1].title;
            tab1_dl.children[1].children[2].innerHTML = json.zonghe[1].time;
            */
            for (let index = 1, json_length = 7/*json.length*/; index < json_length; index++) {//只取前5个
                tab1_dl.children[index].className = json.zonghe[index].class;
                tab1_dl.children[index].children[1].href = json.zonghe[index].a_href;
                tab1_dl.children[index].children[1].innerHTML = json.zonghe[index].title;
                tab1_dl.children[index].children[2].innerHTML = json.zonghe[index].time;
            }
        } else {
            alert(xhr_tab1.status + '请求失败');
        };
    };
}  