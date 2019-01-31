var mainWindow;
// get a reference to the main window
window.addEventListener('message', function(event){
    mainWindow = event.source;
    console.log("got reference");
});
document.addEventListener("scroll", function (){
    mainWindow.postMessage(pageYOffset);
    // console.log(pageYOffset);
});