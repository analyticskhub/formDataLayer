/*
ONECLICK APPLICATION DATALAYER CONVENTION
*/

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        one click application welcome details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
digitalData = {
    "siteBrand": "wbc",
    "siteName": "oneclick",
    "siteSection": "cao",
    "siteSubSection": "",
    "siteEnv": "prod",
    "siteDomain": "www.westpac.com.au",
    "siteExperience": "mob",
    "formName": "Cons CC",
    "formType": "checkurl",
    "formIsSTP": "true",
    "formVariant": "na",
    "newFormName": "cc",
    "journeyType": "pub",
    "trackOnce": "true",
    "pageName": "welcome",
    "pageStep": "welcome",
    "pageType": "application"
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        one click application start details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
digitalData = {
    "siteBrand": "wbc",
    "siteName": "oneclick",
    "siteSection": "cao",
    "siteSubSection": "",
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
        one click application intermediate steps details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

digitalData = {
    "siteBrand": "wbc",
    "siteName": "oneclick",
    "siteSection": "cao",
    "siteSubSection": "",
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
    "eventKey": "mob:wbc_oneclick_app_cc_your-details",
    "pageType": "application"
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        one click application save details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
digitalData = {
    "siteBrand": "wbc",
    "siteName": "oneclick",
    "siteSection": "cao",
    "siteSubSection": "",
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
    "pageName": "save-application",
    "eventKey" : "mob:wbc_oneclick_app_cc_thank-you",
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
        one click application retrive details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
digitalData = {
    "siteBrand": "wbc",
    "siteName": "oneclick",
    "siteSection": "cao",
    "siteSubSection": "",
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
    "pageName": "retrive-application",
    "pageStep": "retrive",
    "pageType": "application"
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        one click application complete details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

digitalData = {
    "siteBrand": "wbc",
    "siteName": "oneclick",
    "siteSection": "cao",
    "siteSubSection": "",
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
        "prod": "WBC03PL007",
        "qty": "1",
        "events": "deposit=0",
        "merch": "options=estatement",
        "secondaryProd": "true"
    }, {
        "prod": "WBC03PL005",
        "crossSell": "true",
        "qty": "1"
    }
    ],
    "applicationStatus": [{
        "accountStatus": "opened",
        "profileStatus": "created",
        "verificationStatus": "idv",
        "exceptionCode": "12112"
    }, {
        "accountStatus": "opened",
        "profileStatus": "created",
        "verificationStatus": "idv",
        "exceptionCode": "14442"
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

/*
ONECLICK QUOTE DATALAYER CONVENTION
*/

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        one click quote start details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

digitalData = {
    "siteBrand": "wbc",
    "siteName": "oneclick",
    "siteSection": "cao",
    "siteSubSection": "",
    "siteEnv": "prod",
    "siteDomain": "www.westpac.com.au",
    "siteExperience": "mob",
    "formName": "Cons CC",
    "formType": "checkurl",
    "formIsSTP": "true",
    "formVariant": "na",
    "newFormName": "in",
    "journeyType": "pub",
    "accountType": "na",
    "trackOnce": "true",
    "pageName": "welcome",
    "pageStep": "start",
    "pageType": "quote"
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        one click quote intermediate details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

digitalData = {
    "siteBrand": "wbc",
    "siteName": "oneclick",
    "siteSection": "cao",
    "siteSubSection": "",
    "siteEnv": "prod",
    "siteDomain": "www.westpac.com.au",
    "siteExperience": "mob",
    "formName": "Cons CC",
    "formType": "checkurl",
    "formIsSTP": "true",
    "formVariant": "na",
    "newFormName": "in",
    "journeyType": "pub",
    "accountType": "na",
    "trackOnce": "true",
    "pageName": "welcome",
    "pageType": "quote"
}



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        one click quote save details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

digitalData = {
    "siteBrand": "wbc",
    "siteName": "oneclick",
    "siteSection": "cao",
    "siteSubSection": "",
    "siteEnv": "prod",
    "siteDomain": "www.westpac.com.au",
    "siteExperience": "mob",
    "formName": "Cons CC",
    "formType": "checkurl",
    "formIsSTP": "true",
    "formVariant": "na",
    "newFormName": "in",
    "journeyType": "pub",
    "accountType": "na",
    "trackOnce": "true",
    "pageName": "welcome",
    "pageStep": "save",
    "pageType": "quote"
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        one click quote retrive details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
digitalData = {
    "siteBrand": "wbc",
    "siteName": "oneclick",
    "siteSection": "cao",
    "siteSubSection": "",
    "siteEnv": "prod",
    "siteDomain": "www.westpac.com.au",
    "siteExperience": "mob",
    "formName": "Cons CC",
    "formType": "checkurl",
    "formIsSTP": "true",
    "formVariant": "na",
    "newFormName": "in",
    "journeyType": "pub",
    "accountType": "na",
    "trackOnce": "true",
    "pageName": "welcome",
    "pageStep": "retrive",
    "pageType": "quote"
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        one click quote complete details
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

digitalData = {
    "siteBrand": "wbc",
    "siteName": "oneclick",
    "siteSection": "cao",
    "siteSubSection": "",
    "siteEnv": "prod",
    "siteDomain": "www.westpac.com.au",
    "siteExperience": "mob",
    "formName": "Cons CC",
    "formType": "checkurl",
    "formIsSTP": "true",
    "formVariant": "na",
    "newFormName": "in",
    "journeyType": "pub",
    "accountType": "na",
    "trackOnce": "true",
    "pageName": "welcome",
    "pageStep": "complete",
    "pageType": "quote"
}