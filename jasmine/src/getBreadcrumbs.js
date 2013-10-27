function getBreadCrumbs() {
    console.log('################');
    console.log('getBreadCrumbs()');
    console.log('################');
    // set the cookie based on current breadcrumb
    var currentBcArray = [];
    var currentBcLinks = $('.breadcrumbs:visible').find('a');
    var bcLast = $('.breadcrumbs:visible').find('span');
    // add links
    for (var i = 0, len = currentBcLinks.length; i < len; i++) {
        currentBcArray.push({
            title: currentBcLinks[i].text,
            href: currentBcLinks[i].href
        });
    }
    // add current page
    currentBcArray.push({
        title: bcLast.text(),
        href: window.location.href
    });
    setCookieVal(currentBcArray);
}