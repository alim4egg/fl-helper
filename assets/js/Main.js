var checkUrl;

checkUrl = function(url) {
  var pathname;
  pathname = window.location.pathname;
  pathname = pathname.split("/")[1];
  if (url === pathname) {
    return true;
  }
  return false;
};
