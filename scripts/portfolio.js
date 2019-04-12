// jshint esversion: 6
var selectedProject = "";

function setupSourceMenus() {
    // add a custom context menu for each portfolio card
    [...document.getElementsByClassName("portfolioCard")].forEach(element => {
        element.addEventListener('contextmenu', (event) => {sourceMenu(event, element);});
    });
    document.addEventListener('click', () => {
        document.getElementById('sourceMenu').style.display = 'none';
    });
}

// custom context menu with just one thing on it: "view source"
var clickedElement;
function sourceMenu(event, element) {
    event.preventDefault();
    console.log('right-click on ' + element);
    // show the hidden element which constitutes the source menu
    var contextMenu = document.getElementById('sourceMenu');
    contextMenu.style.display = 'block';
    contextMenu.style.top = event.y + 'px';
    contextMenu.style.left = event.x + 'px';
    // remember which element was clicked on, 
    // so we can show the appropriate source page
    clickedElement = element;
}

// when the context menu is clicked on
function viewSource() {
    // open a link with the source code for that project
    window.open(clickedElement.getAttribute('source-link'), "_blank");
}
