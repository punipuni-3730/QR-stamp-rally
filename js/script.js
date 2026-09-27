const stamp1 = Cookies.get('stamp1');
const stamp2 = Cookies.get('stamp2');
const stamp3 = Cookies.get('stamp3');
const stamp4 = Cookies.get('stamp4');

if(stamp1 == "true") {
    document.stamp1.src = "https://github.com/punipuni-3730/QR-stamp-rally/blob/main/img/stamp/1.PNG?raw=true";
}

if(stamp2 == "true") {
    document.stamp2.src = "https://github.com/punipuni-3730/QR-stamp-rally/blob/main/img/stamp/2.PNG?raw=true";
}

if(stamp3 == "true") {
    document.stamp3.src = "https://github.com/punipuni-3730/QR-stamp-rally/blob/main/img/stamp/3.PNG?raw=true";
}

if(stamp4 == "true") {
    document.stamp4.src = "https://github.com/punipuni-3730/QR-stamp-rally/blob/main/img/stamp/4.PNG?raw=true";
}

function reset() {
    if (window.confirm('集めたスタンプを削除してもよろしいですか？もとには戻せません。')) {
        alert('削除しました');Cookies.remove('stamp1');Cookies.remove('stamp2');Cookies.remove('stamp3');Cookies.remove('stamp4');
        location = 'index.html'
    }
  }

if(stamp1 == "true"){
    if(stamp2 == "true"){
        if(stamp3 == "true"){
            if(stamp4 == "true"){
                document.stamp1.src = "https://github.com/punipuni-3730/QR-stamp-rally/blob/main/img/after/1.PNG?raw=true";
                document.stamp2.src = "https://github.com/punipuni-3730/QR-stamp-rally/blob/main/img/after/2.PNG?raw=true";
                document.stamp3.src = "https://github.com/punipuni-3730/QR-stamp-rally/blob/main/img/after/3.PNG?raw=true";
                document.stamp4.src = "https://github.com/punipuni-3730/QR-stamp-rally/blob/main/img/after/4.PNG?raw=true";
                var mydiv = document.getElementById("main-text");
                var mydiv2 = document.getElementById("sub-text");
                mydiv.innerHTML = "<h1>スタンプがすべて揃いました！</h1>";
            }
        }
    }
}

window.addEventListener("load",function(){
    var ele=document.getElementsByTagName("output")[0];
    setInterval(function(){
      //現在時刻のDateオブジェクトを生成
      var date2 = new Date();
      ele.innerHTML=date2;
  },100);
  },false)


