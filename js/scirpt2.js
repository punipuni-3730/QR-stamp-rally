function firstscript() {
    const stamp2 = Cookies.get('stamp2');
    if(stamp2 == "true") {
        alert('既にスタンプを取得しているようです。');
    }else{
        alert('スタンプを取得しました！');
        Cookies.set('stamp2', 'true');
    }
}
window.onload = firstscript;