const stamp1 = Cookies.get('stamp1');
const stamp2 = Cookies.get('stamp2');
const stamp3 = Cookies.get('stamp3');
const stamp4 = Cookies.get('stamp4');

if(stamp1 == "true") {
    document.stamp1.src = "/img/stamp/1.PNG";
}

if(stamp2 == "true") {
    document.stamp2.src = "/img/stamp/2.PNG";
}

if(stamp3 == "true") {
    document.stamp3.src = "/img/stamp/3.PNG";
}

if(stamp4 == "true") {
    document.stamp4.src = "/img/stamp/4.PNG";
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
                document.stamp1.src = "/img/after/1.png";
                document.stamp2.src = "/img/after/2.png";
                document.stamp3.src = "/img/after/3.png";
                document.stamp4.src = "/img/after/4.png";
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


