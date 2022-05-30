"use-strict";

const cookieName = "Authentication-Cookie";
const loginRedirectPage = 'https://product-staging.digicelgroup.com/aapprofile2/permissions.do?'
const query = window.location.href.split("?")[1];


function deleteAuthenticationCookie() {
  eraseCookie(cookieName);
  setTimeout(redirectToLogin, 1000)
}
function eraseCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function redirectToLogin() {
  window.location.href = loginRedirectPage + decodeURIComponent(query);
}

deleteAuthenticationCookie()
