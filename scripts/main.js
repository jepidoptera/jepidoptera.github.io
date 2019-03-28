var currentTab = "about";
function selectTab(tabname) {
    if (tabname != currentTab) {
        // show the selected tab and hide the previous one
        document.getElementById(currentTab).style.display = 'none';
        var tabButton = document.getElementById(currentTab+"Tab");
        if (tabButton) tabButton.classList.remove('tabSelected');
        currentTab = tabname;
        document.getElementById(currentTab).style.display = 'block';
        tabButton = document.getElementById(currentTab+"Tab");
        if (tabButton) tabButton.classList.add('tabSelected');
        if (currentTab=='messageForm' || currentTab == 'contact') 
            document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
        // location.reload();
    }
}
