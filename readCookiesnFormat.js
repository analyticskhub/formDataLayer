
function getCookies(name) {
    var documentCookie = document.cookie
    var allCookies = []
    if (!documentCookie) return allCookies
    var cookie
    var cookies = documentCookie.split(';')
    for (var i = 0; i < cookies.length; i++) {
        cookie = splitCookie(cookies[i])
        var cookieName = trim(cookie[0])
        if (!name || cookieName === name) {
            allCookies.push({
                name: cookieName,
                value: trim(cookie[1])
            })
        }
    }
    return allCookies
}