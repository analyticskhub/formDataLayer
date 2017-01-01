/*
Ideally simpler form naming but ability in evars to breakout the following:
1.       Brand
2.       Platform
3.       Product Portfolio
4.       Product Type
5.       Product Code.
6.       Product Segment – Bus/Con
7.       Page name
8.       Product Breakdown
9.       X-sell
10.   Public/Secure
11.   STP/Non STP
12.   Activate/Unlock
13.   Device – Mobile/Desktop
14.   Exceptions
15.   NTB/Existing
16.  Business type: Sole trader/ sole director / company.

 */

digitalData = {
	//generic_Vars-START
	'site_Brand': 'wbc',
	'site_Name': 'www',
	'site_Section': 'personal-banking',
	'site_SubSection': 'credit-cards',
	'site_SubSubSection': 'low-rate',
	'site_Env': 'prod',
	'site_Domain': 'www.westpac.com.au',
	'site_Experience': 'tab',
	'site_Version': '1.0.0.119',
	'dataLayer_Ver': '1.4',
	//generic_Vars-END

	//form_specific_vars-START
	'form_IsSTP': 'true',
	'form_Variant': 'na', // activate|unlock
	'form_Name': 'unsec-pl',
	'form_Status': 'approved',
	'journey_Type': 'long-short', // short|long|concise|enterprise
	'account_Type': 'na', // sole-trader|sole-director|company
	'page_Name': 'thank-you',
	'page_Step': 'complete',
	'page_Type': 'application',
	'product_Count': '2',
	'product_ID': [{
		'prod': 'WBC03PL005',
		'qty': '1',
		'events': 'loan=<loan amount>', //for ex - 'events': 'loan=7500'
		'merch': 'options=upl_<main category value>:<service id>|prepop_<status>',
		'transactionID': 'upl_<ref. number>' //for ex – upl_12323232
	}, {
		'prod': 'X-WBC03PL005', //highlighted code only capture if they opening choice account
		'crossSell': 'true',
		'qty': '1',
		'transactionID': 'upl_<ref. number>' //for ex – upl_12323232
	}
	],
	// if form_IsSTP && applicationStatus exists populate application status eVarXX
	// separated by ; if more than one product
	'applicationStatus': [{
		'accountStatus': 'opened',
		'profileStatus': 'created',
		'verificationStatus': 'idv',
		'exceptionCode': '12112',
	}, {
		'accountStatus': 'opened',
		'profileStatus': 'created',
		'verificationStatus': 'idv',
		'exceptionCode': '14442'
	}
	],
	'applicationRefrence': [{
		'prod': 'WBC03PL005',
		'Id': '1',
	},
	{
		'prod': 'WBC03PL005',
		'Id': '1',
	}
	]
	//form_specific_vars-END
	//Ad_Server_vars-START
	// add pageKey & eventKey format and convention 
}

/*
Variables created of the properties
eVar/Prop
1.) Form Name: eVar23: wbc:wow:app:unsec-pl
2.) Page Name: eVar21: wbc:wow:app:unsec-pl:hank-you
3.) Application Status: eVarXX: accStatus:not_opened|proStatus:not_created|verStatus:idnp|exceCode:34d4
4.) Journey Type: evarXX: long|short|long-short|concise|enterprise|
5.) Form Type: eVarXX: stp_na|stp_Unlock|stp_Activate|nonstp_na
6.) Account Type: eVarXX:  single|joint|Sole-trader|sole-director|company
8.) Transaction ID: productID_1-transactionID|productID_2-transactionID|productID_x-transactionID|
9.) Product Count: propXX: 1|2|3 



Application Status Convention
accStatus:not_opened|proStatus:not_created|verStatus:idnp|exceCode:34d4
Journey Type Convention
journey name ( longlong|short|long-short|concise|enterprise|stpshort)
Form Type Convention
FormType:Variant (if any) --> formType = stp|nonstp formVariant = activate|unlock|na
Busines Type Convention
sole-trader|sole-director|company|other
Customer Type Convention 
new-to-bank|existing


*/
