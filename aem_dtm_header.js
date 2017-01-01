//Analytics_Header:DTM Rule
// Version: 

var isProd,
	currentEnvironment,
	currentLocHostname,
	environmentPrefix;

currentEnvironment = digitalData.siteEnv;
//isProd = /^prod/i.test(currentEnvironment);
currentLocHostname = document.location.hostname;
//isTest = /(uat|sit|preprod)\.\d/i.test(digitalData.siteEnv);
// create a logic to identify env type i.e UAT preview, live etc..

isBlueProd = /prd03\.wbc/i.test(currentLocHostname)
isProd = /^www\.westpac\.com\.au$/i.test(currentLocHostname)
isTest = /(prod|dev|uat)(02|03)\.live\.int/i.test(currentLocHostname)
isPreProd = /prod(02|03)\.live\.int/i.test(currentLocHostname)

if (isProd) {
	environmentPrefix = "";
} else if (isBlueProd) {
	environmentPrefix = "//www.westpac.com.au.www.prd03.wbc.rnj50.net";
} else if (isTest)  {
	environmentPrefix = "//uat03.live.int.wbccms.srv.westpac.com.au";
} else if (isPreProd){
	environmentPrefix = "//prod03.live.int.wbccms.srv.westpac.com.au";
}

(function (win, doc, scr, loc, objName, collectLoadStartTime) {
	var element,
		scripts;
	win['AFSAnalyticsObject'] = objName; // Reference object named with string to avoid property renaming in advanced obfuscation. Do not change this name.
	//win[objName] = function () {
	win[objName] = win[objName] || function () { // use tracking object if it already exists, don't replace with new queueing version
		(win[objName].q = win[objName].q || []).push(arguments);
	};
	win[objName].config = {};

	// if this script is in head (high in HTML) capture time as start of page load time (for safari and old IE without native timing support)
	win[objName].config.ls = collectLoadStartTime ? (+new Date()) : 0; // ls = load start time

	element = doc.createElement(scr);
	scripts = doc.getElementsByTagName(scr)[0];
	element.async = 1;
	// avoid making page load look slow if script is slow or unavailable. Tracking array is already ready, so this part should be OK as async
	win.setTimeout(function () {
		element.src = loc;
		scripts.parentNode.insertBefore(element, scripts);
	}, 25);
}
	(window, document, 'script', environmentPrefix + '/content/dam/public/wbc/analytics/analytics_www.js', 'wa', 1));

