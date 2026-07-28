function showMessage(){
    const message = document.getElementById("message");
    message.textContent = "恭喜！这个按钮是用 JavaScript 做出来的互动功能。";
}

function openGoogleTranslate() {
    const currentUrl = window.location.href;
    const googleTranslateUrl = 
    "https://translate.google.com/translate?sl=auto&tl=ja&u="
    + encodeURIComponent(currentUrl);
    
    window.open(googleTranslateUrl, "_blank");
}