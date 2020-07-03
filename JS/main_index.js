let banner_name = document.getElementById("banner_name");
let banner_img = document.getElementById("banner_img");
let i = 0;
let j = 0;
for (let index = 0; index < 5; index++) {
    // for (let index = 0; index < banner_name.children.length; index++) {
    banner_name.children[index].onmousemove = function () {
        banner_img.style.left = -index * 820 + "px";
        // 替代：hover 改变li样式
        banner_name.children[j].style.borderBottom = "2px solid #e3e2e2";
        banner_name.children[j].style.color = "#424242";
        banner_name.children[j].style.backgroundColor = "#e3e2e2";
        banner_name.children[index].style.borderBottom = "2px solid rgb(206, 168, 97)";
        banner_name.children[index].style.color = "#ab8e66";
        banner_name.children[index].style.backgroundColor = "white";
        i = index;
        j = i;
    }
}
var banner_time = setInterval(function () {
    //  改变li样式
    banner_name.children[j].style.borderBottom = "2px solid #e3e2e2";
    banner_name.children[j].style.color = "#424242";
    banner_name.children[j].style.backgroundColor = "#e3e2e2";
    banner_name.children[i].style.borderBottom = "2px solid rgb(206, 168, 97)";
    banner_name.children[i].style.color = "#ab8e66";
    banner_name.children[i].style.backgroundColor = "white";
    banner_img.style.left = -i * 820 + "px";
    j = i;
    i < 4 ? i++ : i = 0;
    // console.log("下一个="+i ,"当前="+j);
}, 3000);
// clearInterval(banner_time);\
//轮播图数据---
let xhr_banner = new XMLHttpRequest();
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
//--轮播图数据

//tab1数据---
let tab1_ul_li = document.querySelectorAll("#wrap1 .tab1 ul li");
let tab1_dl = document.querySelector("#wrap1 .tab1 dl");
// 初始化---
let tab_index = 0;
tab1_ul_li[tab_index].style.fontWeight = "700";
tab1_ul_li[tab_index].style.color = "#1da6ba";
tab1_ul_li[tab_index].style.borderBottom = "7px solid rgba(0, 0, 0, 0)";


let xhr_tab1 = new XMLHttpRequest();
xhr_tab1.open('get', './DATA/wrap1_tab1.json');
xhr_tab1.send(null);
xhr_tab1.onreadystatechange = function () {
    if (xhr_tab1.readyState == 4) {
        if (xhr_tab1.status == 200) {
            let json = JSON.parse(xhr_tab1.responseText);
            let json_;
            // tab1_ul_li[0].innerHTML = json.zonghe[1].title;
            switch (tab_index) {
                case 0:
                    json_ = json.zonghe; break
                case 1:
                    json_ = json.gonggao; break
                case 2:
                    json_ = json.saishi; break
                case 3:
                    json_ = json.gonglue; break
                case 4:
                    json_ = json.shequ; break
            }

            tab1_dl.children[0].children[0].innerHTML = json_[0].title;
            /*
            tab1_dl.children[1].className = json_[1].class;
            // tab1_dl.children[1].class = json_[1].class; //不可以
            tab1_dl.children[1].children[1].href = json_[1].a_href;
            tab1_dl.children[1].children[1].innerHTML = json_[1].title;
            tab1_dl.children[1].children[2].innerHTML = json_[1].time;
            */
            for (let index = 1, json_length = 7/*json.length*/; index < json_length; index++) {//只取前5个
                tab1_dl.children[index].className = json_[index].class;
                tab1_dl.children[index].children[1].href = json_[index].a_href;
                tab1_dl.children[index].children[1].innerHTML = json_[index].title;
                tab1_dl.children[index].children[2].innerHTML = json_[index].time;

                switch(json_[index].class){
                    case "news":
                    tab1_dl.children[index].children[0].innerHTML ="新闻";break
                    case "others":
                    tab1_dl.children[index].children[0].innerHTML ="其他";break
                    case "notice":
                    tab1_dl.children[index].children[0].innerHTML ="公告";break
                    case "videos":
                    tab1_dl.children[index].children[0].innerHTML ="视频";break
                    case "games":
                    tab1_dl.children[index].children[0].innerHTML ="赛事";break
                    case "teaching":
                    tab1_dl.children[index].children[0].innerHTML ="教学";break
                    case "entertainment":
                    tab1_dl.children[index].children[0].innerHTML ="娱乐";break
                    default:
                        tab1_dl.children[index].children[0].innerHTML ="0o0";
                }
            }
        } else {
            alert(xhr_tab1.status + 'index_banner请求失败');
        };
    };
}

// ---初始化

for (let i = 0; i < 5; i++) {
    tab1_ul_li[i].onmouseover = function () {
        tab1_ul_li[tab_index].style.fontWeight = "500";
        tab1_ul_li[tab_index].style.color = "#676767";
        tab1_ul_li[tab_index].style.borderBottom = "7px solid #eeeeee";
        tab1_ul_li[i].style.fontWeight = "700";
        tab1_ul_li[i].style.color = "#1da6ba";
        tab1_ul_li[i].style.borderBottom = "7px solid rgba(0, 0, 0, 0)";
        tab_index = i;

        let xhr_tab1 = new XMLHttpRequest();
        xhr_tab1.open('get', './DATA/wrap1_tab1.json?_=' + Date.now());
        xhr_tab1.send(null);
        xhr_tab1.onreadystatechange = function () {
            if (xhr_tab1.readyState == 4) {
                if (xhr_tab1.status == 200) {
                    let json = JSON.parse(xhr_tab1.responseText);
                    let json_;
                    // tab1_ul_li[0].innerHTML = json.zonghe[1].title;
                    switch (i) {
                        case 0:
                            json_ = json.zonghe; break
                        case 1:
                            json_ = json.gonggao; break
                        case 2:
                            json_ = json.saishi; break
                        case 3:
                            json_ = json.gonglue; break
                        case 4:
                            json_ = json.shequ; break
                    }

                    tab1_dl.children[0].children[0].innerHTML = json_[0].title;
                    /*
                    tab1_dl.children[1].className = json_[1].class;
                    // tab1_dl.children[1].class = json_[1].class; //不可以
                    tab1_dl.children[1].children[1].href = json_[1].a_href;
                    tab1_dl.children[1].children[1].innerHTML = json_[1].title;
                    tab1_dl.children[1].children[2].innerHTML = json_[1].time;
                    */
                    for (let index = 1, json_length = 7/*json.length*/; index < json_length; index++) {//只取前5个
                        tab1_dl.children[index].className = json_[index].class;
                        tab1_dl.children[index].children[1].href = json_[index].a_href;
                        tab1_dl.children[index].children[1].innerHTML = json_[index].title;
                        tab1_dl.children[index].children[2].innerHTML = json_[index].time;
                    
                        switch(json_[index].class){
                            case "news":
                            tab1_dl.children[index].children[0].innerHTML ="新闻";break
                            case "others":
                            tab1_dl.children[index].children[0].innerHTML ="其他";break
                            case "notice":
                            tab1_dl.children[index].children[0].innerHTML ="公告";break
                            case "videos":
                            tab1_dl.children[index].children[0].innerHTML ="视频";break
                            case "games":
                            tab1_dl.children[index].children[0].innerHTML ="赛事";break
                            case "teaching":
                            tab1_dl.children[index].children[0].innerHTML ="教学";break
                            case "entertainment":
                            tab1_dl.children[index].children[0].innerHTML ="娱乐";break
                            default:
                                tab1_dl.children[index].children[0].innerHTML ="0o0";
                        }
                    
                    }
                } else {
                    alert(xhr_tab1.status + 'index_tab1请求失败');
                };
            };
        }

    }
}
//---tab1数据
//tab2数据---
let tab2_index = 0 ;
let tab2_ul1_li = document.querySelector(".tab2 ul").children;
let tab2_ul2_li = document.querySelectorAll(".tab2 .img_box");
for(let i=0 ; i<3 ;i++){
    tab2_ul1_li[i].onmouseover=function(){
        tab2_ul1_li[tab2_index].style.borderBottom = "8px solid #eeeeee";
        tab2_ul1_li[tab2_index].style.color = "#676767";
        tab2_ul1_li[tab2_index].style.fontWeight = "400";
        tab2_ul1_li[i].style.borderBottom = "8px solid rgba(0,0,0,0)";
        tab2_ul1_li[i].style.color = "#1da6ba";
        tab2_ul1_li[i].style.fontWeight = "700";
        tab2_index = i;
        
        let tab2_xhr=new XMLHttpRequest();
        tab2_xhr.open('get','./DATA/wrap1_tab2.json?_='+Date.now());
        tab2_xhr.send(null);
        tab2_xhr.onreadystatechange=function (){
            if (tab2_xhr.readyState==4) { 
                if (tab2_xhr.status==200) { 
                    var json = JSON.parse(tab2_xhr.responseText);
                    for (let index = 0 ,json_length=4/*json.length*/; index < json_length; index++) {
                        // tab2_ul2_li[index].backgroundImage =`url(.${json[0][index].src})`;
                        tab2_ul2_li[index].style.backgroundImage ="url("+json[i][index].src+")";
                        tab2_ul2_li[index].children[0].href = json[i][index].href;
                        tab2_ul2_li[index].children[0].children[0].children[0].innerText = json[i][index].title;
                        tab2_ul2_li[index].children[0].children[0].children[1].innerText = json[i][index].content;
                        tab2_ul2_li[index].children[0].children[0].children[2].innerHTML = json[i][index].timestart+"&nbsp-&nbsp"+json[0][index].timeend;//
                        tab2_ul2_li[index].children[0].children[1].innerText = json[i][index].title;
                        tab2_ul2_li[index].children[0].children[2].innerText = json[i][index].time_remaining;
                        tab2_ul2_li[index].children[0].children[3].innerText = json[i][index].isnew;
                    }
                } else{
                    alert( tab2_xhr.status +'请求失败' );
                };
            };
        }    

    }
}

let tab2_xhr = new XMLHttpRequest();
tab2_xhr.open('get', './DATA/wrap1_tab2.json?_=' + Date.now());
tab2_xhr.send(null);
tab2_xhr.onreadystatechange = function () {
    if (tab2_xhr.readyState == 4) {
        if (tab2_xhr.status == 200) {
            var json = JSON.parse(tab2_xhr.responseText);
            for (let index = 0, json_length = 4/*json.length*/; index < json_length; index++) {
                // tab2_ul2_li[index].backgroundImage =`url(.${json[0][index].src})`;
                tab2_ul2_li[index].style.backgroundImage = "url(" + json[0][index].src + ")";
                tab2_ul2_li[index].children[0].href = json[0][index].href;
                tab2_ul2_li[index].children[0].children[0].children[0].innerText = json[0][index].title;
                tab2_ul2_li[index].children[0].children[0].children[1].innerText = json[0][index].content;
                tab2_ul2_li[index].children[0].children[0].children[2].innerHTML = json[0][index].timestart + "&nbsp-&nbsp" + json[0][index].timeend;//
                tab2_ul2_li[index].children[0].children[1].innerText = json[0][index].title;
                tab2_ul2_li[index].children[0].children[2].innerText = json[0][index].time_remaining;
                tab2_ul2_li[index].children[0].children[3].innerText = json[0][index].isnew;
            }
        } else {
            alert(tab2_xhr.status + '请求失败');
        };
    };
}   
//---tab2数据
// wrap1_game---
document.getElementById("wrap1_game").children[0].autoplay = "autoplay";
document.getElementById("wrap1_game").children[0].loop = "loop";