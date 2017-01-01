//eventKey: page:pageType:searchTerm:pageNumber:timestamp  --> Search spa pages -->  pageType = sitesearch|faqsearch|branchsearch|mediasearch
//eventKey: impression:siteBrand:siteName:Pid:timestamp --> Internal promo tracking (common)
//eventKey: link:siteBrand:siteName:linkName:timestamp  --> link tracking (common)

(function (win, doc) {
    helpers = {
        dataLayer: win.digitalData,

        init: function () {
            //step1: identify the analyticsTrackType (page|impression|link)
            //step2: trigger trackAs.page or trackAs.impression with context details

            var trackingType,
            trackingType = helpers.dataLayer.analyticsTrackType;
            isLocateUs = /locateus/i.test(helpers.dataLayer.siteSection);

            switch (trackingType) {
                // handle special object types
                case 'page':
                    if (isLocateUs) {
                        //do not trigger the call, remove this once defect fixed
                        // do nothing
                    } else {
                        helpers.trackAs.page(helpers.dataLayer)
                    }

                    break;
                case 'impression':
                    var intCmpId;
                    intCmpId = helpers.dataLayer.intCmpPid;
                    // if the pid is not set do not trigger impression
                    if (intCmpId !== '(not-set)') {
                        helpers.trackAs.impression(intCmpId)
                    }
                    break;
                case 'link':
                    //TODO
                    break;
            }

        },
        trackAs: {
            page: function (dataLayer) {
                win.wa("page", dataLayer);
            },
            impression: function (intCmpId) {
                win.wa("impression", intCmpId);
            },
            link: function () {
                //TODO
            },
        }
    }
    if (typeof wa === "function") {
        helpers.init();
    }
})(window, document);