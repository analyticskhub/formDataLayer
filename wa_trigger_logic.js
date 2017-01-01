/*
used only in pageload rule
will abort if it is sitesearch|faqsearch|locateus result page
since the spa tracking will trigger either within app or via
contextHub event rule (WIP)
*/

(function (win, doc) {
    //page load rule - code 
    // will track all page loads automatically except for 
    //site search/branch search/locate us spa pages will not trigger this rule and will depend on SPA


    helpers = {
        dataLayer: win.digitalData,
        currentEnv: win.digitalData.siteEnv,
        location: doc.location,
        init: function () {
            //identify if default or custom tracking type
            var docQueryParam,
                currentSiteSection,
                isBranchResultsPage,
                siteSectionMatch,
                isBranchResultsPage;

            docQueryParam = helpers.location.search;
            currentSiteSection = helpers.dataLayer.siteSection;
            isSearchResultsPage = /\bquery\b/i.test(docQueryParam);
            isBranchResultsPage = /\searchInput\b/i.test(docQueryParam);
            siteSectionMatch = /search|faq|locateus|about-westpac/i.test(currentSiteSection);

            if (siteSectionMatch && (isSearchResultsPage || isBranchResultsPage)) {
                helpers.trackAs.custom();
            } else {
                helpers.trackAs.default(helpers.dataLayer);
            }
        },
        trackAs: {
            // if custom tracking to be triggered in app or event rule
            // just add another property to denote the analytics track type
            custom: function () {
                //window.digitalData.analyticsTrackType = 'custom';
                // do nothing here in production
                if (helpers.currentEnv !== 'prod') {
                    console.info('DTM:PageLoad-Rule:Analytics_Footer:default track ignored');
                }
            },
            // if default, add analytics track type property and trigger tracking
            default: function (dataLayer) {
                //window.digitalData.analyticsTrackType = 'default';
                window.wa('page', dataLayer);
                if (helpers.currentEnv !== 'prod') {
                    console.info('DTM:PageLoad-Rule:Analytics_Footer:track as default');
                }
            }
        }
    }

    if (typeof wa === 'function') {
        helpers.init();
    }

})(window, document);

