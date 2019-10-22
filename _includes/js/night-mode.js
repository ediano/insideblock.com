if (localStorage.active) {
    document.querySelector(".night-mode").classList.add("active");
    document.querySelector(".btn-night-mode").classList.add("active");
}

const nightMode = function() {
    const startNightMode = document.querySelector(".night-mode");
    if ((" " + startNightMode.className + " ").replace(/[\n\t]/g, " ").indexOf("active") > -1) {
        startNightMode.classList.remove("active");
        localStorage.removeItem("active");
    } else {
        startNightMode.classList.add("active");
        localStorage.setItem("active", "active");
    }

    const startBtnNightMode = document.querySelector(".btn-night-mode");
    if ((" " + startBtnNightMode.className + " ").replace(/[\n\t]/g, " ").indexOf("active") > -1) {
        startBtnNightMode.classList.remove("active");
    } else {
        startBtnNightMode.classList.add("active");
    }
};

const btnNightMode = document.querySelector(".btn-night-mode");
btnNightMode.onclick = nightMode;