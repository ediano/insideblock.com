adverts = true;
if (adverts == true) {
    const scriptAdsense = document.createElement('script');
    scriptAdsense.setAttribute('async', '');
    scriptAdsense.setAttribute('src', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
    
    const insAdsense = document.createElement('ins');
    scriptAdsense.setAttribute('class', 'adsbygoogle');
    scriptAdsense.setAttribute('style', 'display:block; text-align:center');
    scriptAdsense.setAttribute('data-ad-layout', 'in-article');
    scriptAdsense.setAttribute('data-ad-format', 'fluid');
    scriptAdsense.setAttribute('data-ad-client', 'ca-pub-6753037893956918');
    scriptAdsense.setAttribute('data-ad-slot', '6049951967');
    
    setTimeout(function() {
        document.head.appendChild(scriptAdsense);
        let capsule = document.querySelectorAll('.ads .capsule');
        for(i = 0; i < capsule.length; i++){
            capsule[i].appendChild(insAdsense);
        }
    }, 3000);
}
