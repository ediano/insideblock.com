adverts = true;
if (adverts == true) {
    const insAdsense = document.querySelectorAll('.ads .ins');
    for (let ins = 0; ins < insAdsense.length; ins++) {
        insAdsense[ins].innerHTML = `
            <ins class="adsbygoogle"
                style="display:block; text-align:center;"
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-6753037893956918"
                data-ad-slot="6049951967"></ins>
        `;
    }

    const scriptSrcAdsense = document.createElement('script');
    scriptSrcAdsense.setAttribute('async', '');
    scriptSrcAdsense.setAttribute('src', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
    setTimeout(function() {
        document.head.appendChild(scriptSrcAdsense);
    }, 3000);
}