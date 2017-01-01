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

https://banking.westpac.com.au/oregon/consumercards/pol/ccapp/appcapture?funcReqd=NewAppl&source=PL&card=404&promoCode=WAAR6#/welcome

 */

digitalData = {
    //generic_Vars-START
    'siteBrand': 'wbc',
    'siteName': 'oregon', //oregon|oneclick|ace|oaf|webapp
    'siteSection': 'oregon',
    'siteSubSection': 'consumercards',
    'siteEnv': 'prod', // prod|test
    'siteDomain': 'www.westpac.com.au',
    'siteExperience': 'mob', //mob|desktop|tab
    //generic_Vars-END

    //form_specific_vars-START
    //------old wbc specific properties-----
    'formName': 'Cons CC"',
    'formType': 'checkurl',
    'transactionID': 'xyzzzz',
    //------ old wbc specific properties ----
    'formIsSTP': 'true', //bankwow forms only
    'formVariant': 'na', // activate|unlock bankwow forms only
    'newFormName': 'cc',
    'formStatus': 'approved',
    'journeyType': 'pub', // pub|auth|concise|enterprise
    'accountType': 'na', // sole-trader|sole-director|company
    'trackOnce': 'true',
    'pageName': 'thank-you',
    'eventKey' : 'mob:wbc_oregon_app_cc_thank-you', // unique eventKey for spa-page|dialog|popup only
    'pageStep': 'complete',
    'pageType': 'application',
    'productID': [{
        'prod': 'WBC03PL005',
        'qty': '2',
        'events': 'deposit=0', //for ex - 'events': 'loan=7500'
        'merch': 'options=estatement',
        'primaryProd': 'true'
    },
    {
        'prod': 'WBC03PL007',
        'qty': '1',
        'events': 'deposit=0', //for ex - 'events': 'loan=7500'
        'merch': 'options=estatement',
        'secondaryProd': 'true'
    }, {
        'prod': 'WBC03PL005', //highlighted code only capture if they opening choice account
        'crossSell': 'true',
        'qty': '1'
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
    // new property for wbg, replaces "transactionID" to accomodate multiple transaction ID 
    'appReference': [{
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
    //Ad_Server_vars-End
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
