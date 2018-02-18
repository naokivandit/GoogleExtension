var title = document.title; //タイトルを取得
var path = document.location.pathname; //パスを取得
var url = location.href; //URLを取得

if(title == 'ダイエットジム13社を比較した料金の安い順ランキング - ダイエットジムハック') {
    alert('このページのタイトルは『' + title +"』だよ！");
}
 if(url == 'http://www.naokiishii.com/') {
    alert('URLが『http://www.naokiishii.com/』のページのh2タグを『赤』に変えます。');
    $('h2').css('color', 'red');
}
if (path == '/entry/find-dietgym') {
    alert('パスが『/entry/find-dietgym』のページのh2タグを『青』に変えます。');
    $('h2').css('color', 'blue');
}
