// open links inside iframe when the buttons are pushed
function clickContact() {
    window.open("contact.html", "iframePanel");
}
function clickAbout() {
    window.open("about.html", "iframePanel");
}
function clickPortfolio() {
    window.open("portfolio.html", "iframePanel");
}

// var iframe;
function loadIframe(){
    console.log ("loading");
    // console.log (iframe.contentDocument.data);

    console.log("continuing");
    // console.log (iframe.contentWindow.origin);
    document.getElementById('iframePanel').contentWindow.postMessage("hi", "*"); 

    // iframe.contentWindow.addEventListener('scroll', function(event) {
    //     console.log(event);
    // }, false);      
    console.log("finished");
}

window.addEventListener("message", iframeScroll(event), false);

function iframeScroll (event){
    console.log(event.data + ", " + event.origin);
}

