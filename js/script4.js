function firstscript() {
    const stamp4 = Cookies.get('stamp4');
    if(stamp4 == "true") {
        alert('既にスタンプを取得しているようです。');
    }else{
        alert('スタンプを取得しました！');
        Cookies.set('stamp4', 'true');
    }
}
window.onload = firstscript;