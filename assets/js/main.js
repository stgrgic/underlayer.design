
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll < 140) {
    $("nav.main").removeClass("scroll");
  }
  if (scroll >= 140) {
    $("nav.main").addClass("scroll");
  }
});

//mobile side menu
function addShowRightMenu(elem) {
  elem.classList.toggle('menu-icon--active');
  var mainNav = document.querySelector('.main');
  mainNav.classList.toggle('mobile-nav');
}