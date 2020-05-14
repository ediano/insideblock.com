const searchOut = function() {
    const startSearch = document.getElementsByClassName("box-search")[0];
    if ((" " + startSearch.className + " ").replace(/[\n\t]/g, " ").indexOf("active") > -1) {
        startSearch.classList.remove("active");
    } else {
        startSearch.classList.add("active");
    };
};

const searchOpen = document.getElementsByClassName("search open")[0];
searchOpen.onclick = searchOut;
const searchClose = document.getElementsByClassName("search close")[0];
searchClose.onclick = searchOut;