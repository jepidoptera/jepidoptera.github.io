// open links inside innerDiv when the buttons are pushed
// function clickContact() {
//     // loadInnerDiv("contact.html");
//     window.open("contact.html", "iframePanel");
// }
// function clickAbout() {
//     window.open("about.html", "iframePanel");
//     // loadinnerDiv("about.html");
// }
// function clickPortfolio() {
//     window.open("portfolio.html", "iframePanel");
//     // loadinnerDiv("portfolio.html");
// }

// // var innerDiv;
// function loadIframe(){
//     var iframe = document.getElementById("iframePanel");
//     // get cross-platform screen width (thanks, stack overflow)
//     var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

//     // cross-platform document height
//     var body = iframe.contentDocument.body,
//     html = iframe.contentDocument.documentElement;

//     var height = Math.max( body.scrollHeight, body.offsetHeight, 
//         html.clientHeight, html.scrollHeight, html.offsetHeight );

//     if (iframe.contentWindow.location.href.slice(-12) == "contact.html"){
//         iframe.style.height = "Calc(100vh - 140px)";
//         iframe.contentDocument.body.style.overflow = "hidden";
//     }
//     else if (w < 640) {
//         iframe.style.height = height + "px";
//         iframe.contentDocument.body.style.overflow = "hidden";
//     }
//     else {
//         iframe.style.height = "Calc(100vh - 140px)";
//         iframe.contentDocument.body.style.overflow = "scroll";
//     }
// }

