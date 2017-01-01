//search spa tracking convention 
//Search results page --> searchPageKey = pageType:searchTerm:pageNumber:<timestamp>
//Search category filter page --> searchPageKey = pageName:itemName:<timestamp>


// example on searchPageKey, applicable to sitesearch|branchsearch|faqsearch|mediasearch


//eventKey: page:pageType:searchTerm:pageNumber:timestamp  --> Search spa pages -->  pageType = sitesearch|faqsearch|branchsearch|mediasearch
//eventKey: impression:siteBrand:siteName:Pid:timestamp --> Internal promo tracking (common)
//eventKey: link:siteBrand:siteName:linkName:timestamp  --> link tracking (common)


digitalData = {
    "siteSection": "search",
    "siteVersion": "1.0.0.56",
    "siteName": "www",
    "dataLayerVer": "1.4",
    "siteBrand": "wbc",
    "siteEnv": "uat",
    "siteDomain": "uat02.www.westpac.com.au",
    "siteExperience": "desktop",
    "searchTerm": "Altitude rewards",
    "searchResults": "211",
    "pageType": "sitesearch",
    "pageNumber": "1",
    // set these additional properties on search result pages
    "eventKey": "sitesearch:altitude-reward:1:2432432432423423423",
    "analyticsTrackType": "page"
}

// example on searchPageKey, search category filter page
digitalData = {
    "siteSection": "search",
    "siteVersion": "1.0.0.56",
    "siteName": "www",
    "dataLayerVer": "1.4",
    "siteBrand": "wbc",
    "siteEnv": "uat",
    "siteDomain": "uat02.www.westpac.com.au",
    "siteExperience": "desktop",
    // set these additional properties on search result pages
    "searchPageKey": "sitesearch:altitude-reward:1:2432432432423423423",
    "pageName" : "search:category-filter:<business-products>",
    "analyticsTrackType": "page"
}

// Internal promo tracking
// append promo properties to existing digitalData object 

digitalData = {
    "siteSection": "personal-banking",
    "siteVersion": "1.0.0.56",
    "siteSubSection": "bank-accounts",
    "siteName": "www",
    "dataLayerVer": "1.4",
    "siteBrand": "wbc",
    "siteEnv": "uat",
    "siteDomain": "uat02.www.westpac.com.au",
    "siteExperience": "desktop",
    // update below properties on banner change event. 
    "analyticsTrackType": "impression",
    "intCmpPid": "iwc:dp:uber_1605::car_per",
    "intCmpKey": "siteBrand:siteName:intCmpPid:<timestamp>"
}




// dictionary of all properties in digitalData 


digitalData = {
	'dataLayerVer' : 'dl.1.0',
	'siteVersion' : 'aem.1.1.234',
	'siteExperience' : 'mob',
	'siteEnv' : 'test',
	'siteDomain' : 'www.westpac.com.au',
	'siteBrand' : 'wbc',
	'siteName' : 'www',
	'siteSection' : 'personal',
	'siteSubsection' : 'personal-loans',
	'siteSubSubsection' : 'read-up-on',
	'siteSubSubSubsection' : 'refinancing-an-existing-loan/',
	'pageType' : 'product',
	'pageStep' : 'view',
	'formName' : 'calculator',
	'itemName' : 'calculator',
	'searchTerm' : 'low rate',
	'searchResults' : '493',
	'searchPageKey ' : '',
	'pageNumber' : '1',
	'searchFilters' : 'Branches>Open Saturdays',
	'_nameKey' : '000locateusbranchsearch000',
	'siteToolUsage' : '',
	'analyticsTrackType' : '',
	'analyticsTrackStatus' : '',
	'intCmpPid' : '',
	'interactionDetail' : '',
	'productID' : [{
			'prod' : '55-day-platinum',
			'family' : 'personal',
			'category' : 'credit-cards',
			'subcategory' : 'low-fee',
			'name' : '55-day-platinum'
		}
	],
}
