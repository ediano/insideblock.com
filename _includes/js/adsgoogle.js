const scriptAds = document.createElement('script');
scriptAds.setAttribute('src', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
scriptAds.setAttribute('async','');
setTimeout(function() {
    document.head.appendChild(scriptAds);
}, 3000);