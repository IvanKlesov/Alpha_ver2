jQuery(document).ready(function() {
  jQuery(".toggle-nav").click(function(e) {
    jQuery(this).toggleClass("header-nav");
    jQuery(".header ul").toggleClass("header-nav");
    e.preventDefault();
  });
});
