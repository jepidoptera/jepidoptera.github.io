// open links inside innerDiv when the buttons are pushed
function clickContact() {
    // loadInnerDiv("contact.html");
    window.open("contact.html", "iframePanel");
}
function clickAbout() {
    window.open("about.html", "iframePanel");
    // loadinnerDiv("about.html");
}
function clickPortfolio() {
    window.open("portfolio.html", "iframePanel");
    // loadinnerDiv("portfolio.html");
}

// var innerDiv;
function loadIframe(){
    var iframe = document.getElementById("iframePanel");

    if (window.width < 640){
        iframe.style.height = iframe.contentWindow.document.body.height + 'px';
        iframe.scrolling = "no";
    }
}
