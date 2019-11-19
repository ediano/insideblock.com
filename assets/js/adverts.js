adverts = true;
if (adverts == true) {
    const scriptAdsense = document.createElement('script');
    scriptAdsense.setAttribute('async', '');
    scriptAdsense.setAttribute('src', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
    
    const insAdsense = document.createElement('ins');
    insAdsense.setAttribute('class', 'adsbygoogle');
    insAdsense.setAttribute('style', 'display:block; text-align:center');
    insAdsense.setAttribute('data-ad-layout', 'in-article');
    insAdsense.setAttribute('data-ad-format', 'fluid');
    insAdsense.setAttribute('data-ad-client', 'ca-pub-6753037893956918');
    insAdsense.setAttribute('data-ad-slot', '6049951967');
    
    setTimeout(function() {
        document.head.appendChild(scriptAdsense);
        let ads = document.querySelectorAll('.ads');
        for(let i = 0; i < ads.length; i++){
            ads[i].appendChild(insAdsense);
        }
    }, 3000);
}
