import _Cookies from 'js-cookie'
import settings from '@/settings'

//添加统一前缀
var Cookies = _Cookies.withConverter({});
Cookies.cookieStartWith = settings.cookieStartWith
Cookies.get = function(key) {
    return _Cookies.get(this.cookieStartWith + key)
}
Cookies.getJSON = function(key) {
    return _Cookies.getJSON(this.cookieStartWith + key)
}
Cookies.set = function(key, value, attributes) {
    _Cookies.set(this.cookieStartWith + key, value, attributes || {})
}

export { Cookies }

export function setDocumentTitle(title) {
    let docTitle = document.title
    if (docTitle !== title) {
        document.title = title
    }
}