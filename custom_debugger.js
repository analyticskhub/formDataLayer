var formatSiteCatPixel = {

	output: '',
	path: null,
	params: null,
	query: {},
	no: 1,

	init: function (url) {

		this.path = url.split('/');
		this.params = url.split('?')[1].split('&');

		this.setQuery(url);

		this.header(url);
		this.mainBody();
		this.footer();

		this.urlPath(url);
		console.log(this.output);

		this.output = '';
		this.no++;
	},

	setQuery: function (url) {
		params = url.split('?')[1].split('&');
		for (var k in params) {
			if (params.hasOwnProperty(k)) {
				tmp = params[k].split('=');
				this.query[tmp[0]] = tmp[1];
			}
		}
	},

	header: function (url) {
		this.output = this.output + "\nSiteCatalyst Server Call #" + this.no + " (" + url.length + " chars)\n";

		if (this.query['pe']) {
			types = {
				'lnk_o': 'CUSTOM LINK',
				'lnk_e': 'EXIT LINK',
				'lnk_d': 'DOWNLOAD LINK'
			}
			this.output = this.output + types[this.query['pe']] + Array(20 - types[this.query['pe']].length).join(' ') + ': ' + unescape(this.query['pev2']) + "\n";
		}

		this.output = this.output + "Report Suite ID    : " + this.path[5] + "\n";
	},

	mainBody: function () {
		for (var k in this.dict) {
			if (this.dict.hasOwnProperty(k)) {
				for (var k1 in this.params) {
					if (this.params.hasOwnProperty(k1)) {
						param = this.params[k1].split('=');
						if (param[0].match('^' + k + '$')) {

							key = this.dict[k] + (this.dict[k].match(/eVar|prop/) ? param[0].match(/[0-9]{1,2}/)[0] : '');
							value = k == 'products' ? this.getProducts(param[1]) : unescape(param[1]);
							this.output = this.output + key + Array(20 - key.length).join(' ') + ': ' + value + '\n';

							delete this.params[k1];
						}
					}
				}
			}
		}
	},

	getProducts: function (products) {

		dictProducts = {
			0: 'Category   : ',
			1: 'Product    : ',
			2: 'Quantity   : ',
			3: 'Price      : ',
			4: 'Events     : ',
			5: 'eVars      : '
		}

		format = '\n';
		products = unescape(products).split(',');
		for (var i = 0; i < products.length; i++) {
			format = format + (i == 0 ? '' : '\n') + '    #' + (i + 1) + '\n';
			item = products[i].split(';');
			for (var y = 0; y < item.length; y++) {
				if (item[y])
					format = format + '    ' + dictProducts[y] + item[y] + '\n';
			}
		}

		return format;
	},

	footer: function () {
		var dc = '';
		for (var k in this.dataCenters) {
			if (this.dataCenters.hasOwnProperty(k)) {
				if (this.path[2].match(k)) {
					dc = ' - ' + this.dataCenters[k];
					break;
				}
			}
		}

		this.output = this.output + "Version of Code    : " + this.path[7] + "\n";
		this.output = this.output + "Data Centre        : " + this.path[2] + dc + "\n";
	},
	urlPath: function (url) {
		var reportSuite;
		this.path = url.split('/');
		reportSuite = this.path[5]
		this.isProd(reportSuite)
	},
	isProd: function (rsuite) {
		currentEnv = /prd/.test(rsuite);
		if (currentEnv = true) {
			currentEnv = 'production';
		} else {
			currentEnv = 'test';
		}
		this.omniCookies(currentEnv)
		this.output = this.output + "Current Environment    : " + currentEnv + "\n";;
		this.output = this.output + "dataLayer    : " + JSON.stringify(pageDetails, null, 2);
	},
	omniCookies: function (envcookie) {
		if (envcookie === 'production') {
			/*
			var sessID = 's_sess_wp';
			var persID = 's_pers-wp';
			var devSessID = sessID + '_dev';
			var devPersID = persID + '_dev';
			 */
			var sessCookie = this.readCookies('s_sess_wp' + /(|_dev)/).split(';');
			console.info('sessCookie-->', sessCookie);
			for (i = 0; i < sessCookie.length; ++i) {
				analyticsSessionCookie = unescape(sessCookie[i] + '\n');
				this.output = this.output + analyticsSessionCookie;
				//analyticsPersistentCookie = this.docCookies.getItem('s_pers_wp');
			}
			var persCookie = this.readCookies('s_pers_wp' + /(|_dev)/).split(';').join(':');
			console.info('persCookie-->', persCookie);
			for (i = 0; i < persCookie.length; ++i) {
				analyticsPersistentCookie = unescape(persCookie[i] + '\n');
				this.output = this.output + analyticsPersistentCookie;
				//analyticsPersistentCookie = this.docCookies.getItem('s_pers_wp');
			}
		}
	},
	readCookies: function (sKey) {
		if (!sKey) {
			return null;
		}
		return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
	},

	setFriendlyEventName: function (events) {
		var eventsList,
			format;

		eventNames = {
			'event1': 'PageView',
			'event50': 'PageLoad-Time'
		}

		eventsList = events.split(',');
		for (var i = 0; i < eventsList.length; i++) {
			format = eventNames[i];
		}
		return format;
	},

	dict: {
		'pageName': 'Page Name',
		'ch': 'Site Section',
		'server': 'Server',
		'g': 'Current URL',
		'events': 'Events',
		'purchaseID': 'Purchase ID',
		'products': 'Products',
		'v0': 'Campaign',
		'v([0-9]{1,2})': 'eVar',
		'c([0-9]{1,2})': 'prop',
		'xact': 'Transaction ID',
		'cc': 'Currency Code',
		'ce': 'Char Set',
		's': 'Screen Resolution',
		'c': 'Color Depth',
		'j': 'JavaScript Version',
		'v': 'JavaScript Enabled',
		'k': 'Cookies Supported',
		'bw': 'Browser Width',
		'bh': 'Browser Height',
		'v1': 'Site',
		'v2': 'Section',
		'v3': 'Sub section',
		'v4': 'Sub sub section',
		'v7': 'Experience'
		//'p'				: 'Plug-ins'
	},
	// wip, loop thru to set friendly name
	easyNames: {
		'eVar1': 'Site',
		'eVar2': 'Section',
		'eVar3': 'Sub section',
		'eVar4': 'Sub sub section',
		'eVar7': 'Experience'
	},

	dataCenters: {
		'112.2o7.net': 'San Jose, California (old data collection method)',
		'122.2o7.net': 'Dallas, Texas (old data collection method)',
		'd1.sc.omtrdc.net': 'San Jose, California',
		'd2.sc.omtrdc.net': 'Dallas, Texas',
		'd3.sc.omtrdc.net': 'London, United Kingdom'
	}
}

var imgRqst = window['s_i_' + window.s._in + '_' + window.s.visitorNamespace + ((window.s.rc ? window.s.rc[window.s.visitorNamespace] : 0) > 1 ? '_' + ((window.s.rc ? window.s.rc[window.s.visitorNamespace] : 0) - 1) : '')].src;
formatSiteCatPixel.init(imgRqst);
