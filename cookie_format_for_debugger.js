[
	" s_vnum=1496629267776%26vn%3D11|1496629267776",
	" lppn=0personal-banking%3Acredit-cards%3Acomparisonproduct000|1465360508402",
	" s_fid=785E3A7F04230C83-1CC4E5CCCCF18681|1528430708575",
	" s_invisit=true|1465360508599",
	" s_lv=1465358708609|1559966708609",
	" s_lv_s=Less%20than%201%20day%7C0|1465360508609",
	" s_lfcl=Engaged|1496894708585",
	" lastPg=wbc%3Awww%3Apers%3Acredit-cards%3Acomparison|1465445108726",
	""
]


// join the cookie array with ":" and then split by ":" again by "=" and push them to result obj
result = {}
str.split('~').forEach(function(x){
    var arr = x.split('=');
    arr[1] && (result[arr[0]] = arr[1]);
});

 s_vnum=1496629267776&vn=11|1496629267776, 
 lppn=0personal-banking:credit-cards:comparisonproduct000|1465360508402, 
 s_fid=785E3A7F04230C83-1CC4E5CCCCF18681|1528430708575, 
 s_invisit=true|1465360508599, 
 s_lv=1465358708609|1559966708609, 
 s_lv_s=Less than 1 day|0|1465360508609, 
 s_lfcl=Engaged|1496894708585, 
 lastPg=wbc:www:pers:credit-cards:comparison|1465445108726,
 
 function convertTimestamp(timestamp) {
  var d = new Date(timestamp * 1000),	// Convert the passed timestamp to milliseconds
		yyyy = d.getFullYear(),
		mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
		dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
		hh = d.getHours(),
		h = hh,
		min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
		ampm = 'AM',
		time;
			
	if (hh > 12) {
		h = hh - 12;
		ampm = 'PM';
	} else if (hh === 12) {
		h = 12;
		ampm = 'PM';
	} else if (hh == 0) {
		h = 12;
	}
	
	// ie: 2013-02-18, 8:35 AM	
	time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
		
	return time;
}