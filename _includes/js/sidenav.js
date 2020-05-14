const slideOut = function() {
    const startSlideOut = document.getElementsByClassName("slide-out")[0];
    if ((" " + startSlideOut.className + " ").replace(/[\n\t]/g, " ").indexOf("active") > -1) {
        startSlideOut.classList.remove("active");
    } else {
        startSlideOut.classList.add("active");
    };

    const startSidenavTrigger = document.getElementsByClassName("sidenav-trigger")[0];
    if ((" " + startSidenavTrigger.className + " ").replace(/[\n\t]/g, " ").indexOf("active") > -1) {
        startSidenavTrigger.classList.remove("active");
    } else {
        startSidenavTrigger.classList.add("active");
    };
};

const btnOpen = document.getElementsByClassName("sidenav-trigger")[0];
btnOpen.onclick = slideOut;
const btnClose = document.getElementsByClassName("sidenav-trigger close")[0];
btnClose.onclick = slideOut;