//iframe自适应代码
function setIframeHeight(iframe) {
    if (iframe) {
        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
            iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
        }
    }
};
window.onload = function () {
setIframeHeight(document.getElementById('minihtml'));
};



//右上角按钮
function down(){
    alert("正在建设，如有疑问请联系:\n3083649887@qq.com");
    return false;
}
//导航
var miniurl0;
var miniurl1;
function urlgo(){
    miniurl0 = "page/"+miniurl1 +"/" + miniurl1 + ".html";
    minihtml.src= miniurl0;
}
function hometab(){
    miniurl1= "home";
    urlgo();
    setIframeHeight(iframe);
    setIframeHeight(document.getElementById('minihtml'));
}
function recruittab(){
    miniurl1= "recruit";
    urlgo();
    setIframeHeight(iframe);
    setIframeHeight(document.getElementById('minihtml'));
}
function newstab(){
    miniurl1= "news";
    urlgo();
    setIframeHeight(iframe);
    setIframeHeight(document.getElementById('minihtml'));
}
function abouttab(){
    miniurl1= "about";
    urlgo();
    setIframeHeight(iframe);
    setIframeHeight(document.getElementById('minihtml'));
}