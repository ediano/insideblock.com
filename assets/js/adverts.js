adverts = true;
if (adverts == true) {
    const scriptAdsense = document.createElement('script');
    scriptAdsense.setAttribute('async', '');
    scriptAdsense.setAttribute('src', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
    
    for(let i = 0; i < ads.length; i++){
        ads[i].innerHTML = `
            <ins class="adsbygoogle" style="display:block; text-align:center;"
                data-ad-layout="in-article" data-ad-format="fluid"
                data-ad-client="ca-pub-6753037893956918" data-ad-slot="6049951967"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        `;
    }
    
    setTimeout(function() {
        document.head.appendChild(scriptAdsense);
    }, 3000);
}
