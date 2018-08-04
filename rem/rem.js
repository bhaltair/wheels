(function() {
  var de = document.documentElement;
  function resetFontSize() {
    var w = de.clientWidth;
    if (w > 375) {
      w = 375;
    }
    de.style.fontSize = 100 * (w / 375  ) + "px";
  }
  resetFontSize();
  window.addEventListener("resize", resetFontSize, false);
})();
