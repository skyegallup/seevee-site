import Cookies from 'js-cookie';

// This can be replaced with `Cookies.withAttributes()` once npm updates to js-cookie v3.
const attributes = { expires: 365, sameSite: 'strict' };

function setAuthCookie(token) {
    Cookies.set('seevee-auth', token, attributes);
}

function deleteAuthCookie() {
    Cookies.remove('seevee-auth', attributes);
}

function getAuthCookie() {
    return Cookies.get('seevee-auth');
}

function isAuthenticated() {
    return getAuthCookie() !== undefined;
}

export { setAuthCookie, deleteAuthCookie, getAuthCookie, isAuthenticated };
