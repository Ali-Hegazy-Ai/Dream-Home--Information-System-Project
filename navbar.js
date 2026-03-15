(function () {
  var navbar = '<header>' +
    '<input type="checkbox" id="nav-toggle" class="nav-toggle">' +
    '<a href="index.html" class="logo">' +
      '<span>\uD83C\uDFE0</span> Dream Home' +
    '</a>' +
    '<div class="nav-menu">' +
      '<a href="index.html">Home</a>' +
      '<a href="index.html#properties2">Properties</a>' +
      '<a href="contact.html">Contact</a>' +
    '</div>' +
    '<div class="auth-buttons">' +
      '<button class="signup-btn" onclick="window.location.href=\'sign-up.html\'">Sign up</button>' +
      '<button class="login-btn" onclick="window.location.href=\'login.html\'">Login</button>' +
    '</div>' +
    '<label for="nav-toggle" class="nav-toggle-label">' +
      '<span></span>' +
      '<span></span>' +
      '<span></span>' +
    '</label>' +
  '</header>';
  document.currentScript.insertAdjacentHTML('afterend', navbar);
})();
