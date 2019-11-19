let ads = document.querySelectorAll('.ads');

const scriptAds = document.createElement('script');
scriptAds.setAttribute('src', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
scriptAds.setAttribute('async', '');

const insAds = document.createElement('ins');
insAds.setAttribute('class', 'adsbygoogle');
insAds.setAttribute('style', 'display:block; text-align:center');
insAds.setAttribute('data-ad-layout', 'in-article');
insAds.setAttribute('data-ad-format', 'fluid');
insAds.setAttribute('data-ad-client', 'ca-pub-6753037893956918');
insAds.setAttribute('data-ad-slot', '6049951967');

setTimeout(function() {
    for (i = 0; i < ads.length; i++) {
        ads[i].appendChild(scriptAds);
        ads[i].appendChild(insAds);
    }
}, 3000);