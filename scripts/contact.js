function onClickSubmit(){
    if (document.getElementById("nameInput").value != "" &&
    document.getElementById("emailInput").value != "" &&
    // todo: require it to be a valid email address
    document.getElementById("messageInput").value != ""){
        // show okthanks panel
        document.getElementById("thanksPanel").style.display = "block";
    }
    else{
        // show warning panel - not all boxes are filled in
        document.getElementById("warningPanel").style.display = "block";
    }
};

function onClickOkThanks(){
    document.getElementById("thanksPanel").style.display = "none";
    window.location.href = "about.html";
}

function onClickOkFine(){
    document.getElementById("warningPanel").style.display = "none";
}