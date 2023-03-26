function firstscript() {
    const stamp1 = Cookies.get('stamp1');
    if(stamp1 == "true") {
        alert('既にスタンプを取得しているようです。');
    }else{
        alert('スタンプを取得しました！');
        Cookies.set('stamp1', 'true');
    }
}
window.onload = firstscript;
