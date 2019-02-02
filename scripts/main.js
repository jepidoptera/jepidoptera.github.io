// open links inside iframe when the buttons are pushed
function clickContact() {
    window.open("contact.html", "iframePanel");
    loadIframe();
}
function clickAbout() {
    window.open("about.html", "iframePanel");
    loadIframe();
}
function clickPortfolio() {
    window.open("portfolio.html", "iframePanel");
    loadIframe();
}

var iframeHeight = 0;
var iframeTop = 0;
var iframe;
// var iframe;
function loadIframe(){
    if (screen.width < 640){
        iframe = document.getElementById("iframePanel");
        iframe.style.height = (iframe.contentWindow.document.body.scrollHeight + 40) + 'px';
        iframe.scrolling = "no";
    }
    else {
        iframe = document.getElementById("iframePanel");
        iframe.style.height = "420px";
        iframe.scrolling = "yes";
    }
    // // // send a message to the iframe so it can get a handle to the parent window
    // // var iframe = document.getElementById('iframePanel');
    // // iframe.contentWindow.postMessage("hi", "*");
    // // get the default height and position for the iframe
    // iframe =  document.getElementById("iframePanel");
    // iframeHeight = iframe.style.height;
    // iframeTop = iframe.style.top;

    // // let's try this a different way...
    // iframe.contentWindow.addEventListener("scroll", function() {
    //     if (screen.width <= 640) {
    //         // phone screen
    //         // move header out of the way
    //         var header = document.getElementById("headerSection");
    //         var iframe = document.getElementById('iframePanel');
    //         var scrollHeight = parseInt(iframe.contentWindow.pageYOffset);
    //         if (scrollHeight == 0) {
    //             document.getElementById("headerSection").style.top = "0px";
    //             return;
    //         }
    //         var headerMin = -parseInt(document.getElementById("headerSection").style.height);
    //         var headerTop = Math.max(parseInt(document.getElementById("headerSection").style.top) - toString(-scrollHeight), headerMin);
    //         document.getElementById("headerSection").style.top = headerTop + "px";
    //         if (headerTop > headerMin) {
    //             iframe.contentWindow.pageYOffset = 0;
    //         }
    //         iframe.style.height = Math.max(
    //             iframeHeight + parseInt(event.data), iframeHeight + header.style.height
    //         ) + "px";
    //         iframe.style.top = Math.min(
    //             iframeTop - parseInt(event.data), 0
    //         ) + "px";
    //     }
    // });
}

// window.addEventListener("message", function(event){
//     // console.log(event.data + ", " + event.origin);
//     // iframe will post its scroll y offset as a message, 
//     // and if screen width < 640, we'll have the header scroll up 
//     // by that amount, and the iframe expands to fill the space
//     if (typeof(data) != "number") return;
//     var header = document.getElementById("headerSection");
//     var iframe = document.getElementById('iframePanel');
//     if (screen.width <= 640) {
//         // phone screen
//         // move header out of the way
//         header.style.top = toString(-event.data) + "px";
//         iframe.style.height = Math.max(
//             iframeHeight + parseInt(event.data), iframeHeight + header.style.height
//         ) + "px";
//         iframe.style.top = Math.min(
//             iframeTop - parseInt(event.data), 0
//         ) + "px";
//     }
// }, 
// false);

