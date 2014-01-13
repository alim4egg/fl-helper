var Main, checkUrl;

checkUrl = function(url) {
  var pathname;
  pathname = window.location.pathname;
  pathname = pathname.split("/")[1];
  if (url === pathname) {
    return true;
  }
  return false;
};

Main = (function() {
  function Main() {
    console.log('Main');
  }

  return Main;

})();

$(function() {
  var main;
  return main = new Main();
});
