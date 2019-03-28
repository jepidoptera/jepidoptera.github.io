// jshint esversion: 6
var selectedProject = "";

function setupSourceMenus() {
    [...document.getElementsByClassName("portfolioImage")].forEach(element => {
        element.addEventListener('contextmenu', (event) => {sourceMenu(event, element);});
    });
    document.addEventListener('click', () => {
        document.getElementById('sourceMenu').style.display = 'none';
    });
}

var clickedElement;
function sourceMenu(event, element) {
    event.preventDefault();
    console.log('right-click on ' + element);
    var contextMenu = document.getElementById('sourceMenu');
    contextMenu.style.display = 'block';
    contextMenu.style.top = event.y + 'px';
    contextMenu.style.left = event.x + 'px';
    clickedElement = element;
}

function viewSource() {
    window.open(clickedElement.getAttribute('source-link'), "_blank");
}
