/*
OREGON APPLICATION DATALAYER CONVENTION
*/

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        oregon application welcome details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
digitalData = {
    "siteBrand": "wbc",
    "siteName": "oregon",
    "siteSection": "consumercards",
    "siteSubSection": "pol",
    "siteEnv": "prod",
    "siteDomain": "www.westpac.com.au",
    "siteExperience": "mob",
    "formName": "Cons CC",
    "formType": "checkurl",
    "newFormName": "cc",
    "journeyType": "pub",
    "trackOnce": "true",
    "pageName": "welcome",
    "pageStep": "welcome",
    "pageType": "application"
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        oregon application start details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
digitalData = {
    "siteBrand": "wbc",
    "siteName": "oregon",
    "siteSection": "consumercards",
    "siteSubSection": "pol",
    "siteEnv": "prod",
    "siteDomain": "www.westpac.com.au",
    "siteExperience": "mob",
    "formName": "Cons CC",
    "formType": "checkurl",
    "formIsSTP": "true",
    "formVariant": "na",
    "newFormName": "cc",
    "journeyType": "pub",
    "accountType": "na",
    "trackOnce": "true",
    "pageName": "your-details",
    //"eventKey" : "mob:wbc_oregon_app_cc_your-details",
    "pageStep": "start",
    "pageType": "application",
    "productID": [{
        "prod": "WBC03PL005",
        "qty": "1",
        "primaryProd": "true"
    }
    ]
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        oregon application intermediate steps details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

digitalData = {
    "siteBrand": "wbc",
    "siteName": "oregon",
    "siteSection": "consumercards",
    "siteSubSection": "pol",
    "siteEnv": "prod",
    "siteDomain": "www.westpac.com.au",
    "siteExperience": "mob",
    "formName": "Cons CC",
    "formType": "checkurl",
    "newFormName": "cc",
    "journeyType": "pub",
    "accountType": "na",
    "trackOnce": "true",
    "pageName": "your-details",
    "eventKey": "mob:wbc_oneclick_app_cc_your-details",
    "pageType": "application"
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        oregon application save details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
digitalData = {
    "siteBrand": "wbc",
    "siteName": "oregon",
    "siteSection": "consumercards",
    "siteSubSection": "pol",
    "siteEnv": "prod",
    "siteDomain": "www.westpac.com.au",
    "siteExperience": "mob",
    "formName": "Cons CC",
    "formType": "checkurl",
    "newFormName": "cc",
    "journeyType": "pub",
    "accountType": "na",
    "trackOnce": "true",
    "pageName": "save-application",
    "eventKey": "mob:wbc_oneclick_app_cc_thank-you",
    "pageStep": "save",
    "pageType": "application",
    "productID": [{
        "prod": "WBC03PL005",
        "qty": "1",
        "primaryProd": "true"
    }],
    "appReference": [{
        "prod": "WBC03PL005",
        "Id": "1"
    }
    ]
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        oregon application retrive details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
digitalData = {
    "siteBrand": "wbc",
    "siteName": "oregon",
    "siteSection": "consumercards",
    "siteSubSection": "pol",
    "siteEnv": "prod",
    "siteDomain": "www.westpac.com.au",
    "siteExperience": "mob",
    "formName": "Cons CC",
    "formType": "checkurl",
    "newFormName": "cc",
    "journeyType": "pub",
    "accountType": "na",
    "trackOnce": "true",
    "pageName": "retrive-application",
    "pageStep": "retrive",
    "pageType": "application"
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        oregon application complete details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

digitalData = {
    "siteBrand": "wbc",
    "siteName": "oregon",
    "siteSection": "consumercards",
    "siteSubSection": "pol",
    "siteEnv": "prod",
    "siteDomain": "www.westpac.com.au",
    "siteExperience": "mob",
    "formName": "Cons CC",
    "formType": "checkurl",
    "newFormName": "cc",
    "journeyType": "pub",
    "accountType": "na",
    "trackOnce": "true",
    "pageName": "thank-you",
    "eventKey": "mob:wbc_oneclick_app_cc_thank-you",
    "pageStep": "complete",
    "pageType": "application",
    "productID": [{
        "prod": "WBC03PL005",
        "qty": "2",
        "events": "deposit=0",
        "merch": "options=estatement",
        "primaryProd": "true"
    },
    {
        "prod": "WBC03PL005",
        "crossSell": "true",
        "qty": "1"
    }
    ],
    "appReference": [{
        "prod": "WBC03PL005",
        "Id": "1"
    },
    {
        "prod": "WBC03PL005",
        "Id": "1"
    }
    ]
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

