"use-strict";

const cookieName = "Authentication-Cookie";

function setAuthenticationCookie() {
  console.log("Setting authentication cookie");
  const value = "eyJhbGciOiJIUzI1NiIsInZlciI6MS4yLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiJBVVRIIiwiYXV0IjoiTVNJU0ROIiwiaXNvIjoiU0xWIiwiaWlkIjo5MzYyOCwiaWdkIjoiQTlGM0Y3Mjk3RDI2N0M0MkUwNTMzQzBFMUJBQzYzMzEiLCJpc3MiOiJkaWdpY2VsaWQuZGlnaWNlbGdyb3VwLmNvbSIsIm5pZCI6MSwiYXVkIjoiSURFTlRJVFkiLCJleHAiOjE2NjA3NjI1NjcsIm1zaXNkbiI6IjUwMzczOTgwNDM5IiwiaWF0IjoxNjUyOTg2NTY3LCJpbmEiOiI1MDM3Mzk4MDQzOSIsImp0aSI6IjQyYzZjZDY3OTE3ZTRhNDBhY2M3M2I2ZDAwZWEyZDFhIn0.Tpst5u9-wGqMLBx1jWgCy0Cgm1-FZMLmhPK62JdZB6Q";
  const days = 365;
  console.log({cookieName, value, days});
  setCookie(cookieName, value, days);
  console.log(getCookie(cookieName))
}

function deleteAuthenticationCookie() {
  eraseCookie(cookieName);
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
