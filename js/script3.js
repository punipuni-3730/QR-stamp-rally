function firstscript() {
    const stamp3 = Cookies.get('stamp3');
    if(stamp3 == "true") {
        alert('既にスタンプを取得しているようです。');
    }else{
        alert('スタンプを取得しました！');
        Cookies.set('stamp3', 'true');
    }
}
window.onload = firstscript;