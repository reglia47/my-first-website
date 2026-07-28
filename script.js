function showMessage(){
    const message = document.getElementById("message");

    message.textContent = "恭喜！这个按钮是用 JavaScript 做出来的互动功能。";
}

function openGoogleTranslate() {
    const currentUrl = "https://reglia47.github.io/my-first-website/";
    const googleTranslateUrl = 
    "https://translate.google.com/translate?sl=auto&tl=ja&u="
    + encodeURIComponent(currentUrl);

    window.open(googleTranslateUrl, "_self");
}