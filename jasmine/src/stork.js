(function($) {

    $(window).load(function() {

        console.log('#####################START SCRIPT###########');

        var bctMgmt = (function() {

            var bcPresence = false;

            function setCookieVal(value) {
                console.log('before setting Cookie:', $.cookie('bcHistory'));
                $.cookie('bcHistory', value);
                console.log('after setting Cookie:', $.cookie('bcHistory'));
            }

            function getCookieVal() {
                var cv = $.cookie('bcHistory');
                console.log('cookie value', cv);
                return cv;
            }

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

            function checkPage() {
                // are breadcrumbs on this page?
                var bcWrapper = $('#c4-breadcrumbs-id10T');
                // is this a product page? does page have breadcrumb wrapper?            
                var bcs = $('.breadcrumbs');
                if (bcWrapper.length > 0 || bcs.length > 0) {
                    console.log('breadcrumbs are present!');
                    bcPresence = true;
                } else {
                    console.log('breadcrumbs are not present!');
                    bcPresence = false;
                }
                return bcPresence;
            }
            function deleteCookieVal() {
                console.log('not product page!, delete cookie...');
                $.removeCookie('bcHistory')
            }

            return {
                getCV: getCookieVal,
                delCV: deleteCookieVal,
                matchBC: matchBreadCrumbs,
                setBC: getBreadCrumbs,
                bctOnPage: checkPage
            };
        })();

        $.cookie.json = true;
//        $('.breadcrumbs:visible a').css('color', '#f00');

        if (bctMgmt.bctOnPage()) {
            (bctMgmt.getCV() === undefined)
                    ? bctMgmt.setBC()
                    : bctMgmt.matchBC();
        } else {
            bctMgmt.delCV();
        }

        window.bctMgmt = bctMgmt;

        console.log('#####################END SCRIPT#############');
    });
}(jQuery));
