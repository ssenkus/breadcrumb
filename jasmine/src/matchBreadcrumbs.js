function matchBreadCrumbs() {
    if (!bcPresence) {
        return;
    }
    console.log('###################');
    console.log(' matchBreadCrumb() ');
    console.log('###################');

    var bcTrailAll = $('.breadcrumbs');

    console.log('# of breadcrumb trails', bcTrailAll.length)
    // if there is only one cookie trail, grab it and exit this function
    if (bcTrailAll.length === 1) {
        console.log('only one breadcrumb trail, so grab it!');
        getBreadCrumbs();

    } else {

        // loop through all .breadcrumb <div>s and find <a>s
        // compare length to avoid unnecessary comparisons
        // then compare titles
        var currentCookieVal = getCookieVal();
        bcTrailAll.each(function(i) {
            var linkEls = $(this).find('a');
            var match = false;


            console.log(".breadcrumbs #" + i);
            if (linkEls.length === currentCookieVal.length) {
                console.log("##### TEST BREADCRUMB #####");
                for (var j = 0, len = linkEls.length; j < len; j++) {

                    console.log('found:' + linkEls[j].text + ", looking for: " + currentCookieVal[j].title);
                    if (linkEls[j].text === currentCookieVal[j].title) {
                        match = true;
                        console.log('match', linkEls[j].text);
                    } else {

                        console.log("##### FAIL!!! - TRY NEXT BREADCRUMB #####");
                        match = false;
                        break;
                    }

                }
                if (match) {
                    console.log('found it!', $.cookie('bcHistory'));
                    $('.breadcrumbs').hide();
                    $(this).show();
                    return false;
                } else {
                    console.log('No match!');

                }
            }
        });
    }
}