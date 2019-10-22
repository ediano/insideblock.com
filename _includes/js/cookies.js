if (localStorage.cookies) {
    document.getElementsByClassName("cookies")[0].classList.add("accept");
};

const acceptCookies = function() {
    document.getElementsByClassName("cookies")[0].classList.add("accept");
    localStorage.setItem("cookies", "accept");
};

const btnCookies = document.getElementsByClassName("btn-cookies")[0];
btnCookies.onclick = acceptCookies;