function showMessage(){
    const message = document.getElementById("message");

    message.textContent = "恭喜！这个按钮是用 JavaScript 做出来的互动功能。";
}

function openGoogleTranslate() {
    const originalUrl = "https://reglia47.github.io/my-first-website/";

    const targetLanguage = document.getElementById("targetLanguage").value;

    if (targetLanguage === "zh-CN") {
        window.open(originalUrl, "_self");
        return;
    }

    const freshUrl = originalUrl +"?v=" + Date.now();
    
    const googleTranslateUrl = 
    "https://translate.google.com/translate?sl=auto&tl="
    + targetLanguage
    + "&u="
    + encodeURIComponent(freshUrl);

    window.open(googleTranslateUrl, "_self");
}