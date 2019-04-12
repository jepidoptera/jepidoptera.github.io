// jshint esversion: 6
function onClickSubmit(){
    // show dialog layer - blocks user from clicking anything but the box
    document.getElementById("dialogPanels").style.display = "block";
    if (document.getElementById("nameInput").value != "" &&
    document.getElementById("emailInput").value != "" &&
    // todo: require it to be a valid email address
    document.getElementById("messageInput").value != ""){
        // show okthanks panel
        document.getElementById("thanksPanel").style.display = "inline-block";
    }
    else{
        // show warning panel - not all boxes are filled in
        document.getElementById("warningPanel").style.display = "inline-block";
    }
}

function onClickOkThanks(){
    document.getElementById("dialogPanels").style.display = "none";
    document.getElementById("thanksPanel").style.display = "none";
    // clear inputs
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("messageInput").value = "";
    // return to bio page
    selectTab('contact');
}

function onClickOkFine(){
    document.getElementById("dialogPanels").style.display = "none";
    document.getElementById("warningPanel").style.display = "none";
}

