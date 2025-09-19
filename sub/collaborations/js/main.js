$(document).ready(function () {
  $(".ham_icon i").click(function () {
    $(".mobile_menu").addClass("active");
  });

  $(".mobile_menu i.fa-xmark").click(function () {
    $(".mobile_menu").removeClass("active");
  });

  $(".mobile_main").click(function () {
    let $subMenu = $(this).siblings(".mobile_sub");

    if ($subMenu.hasClass("active")) {
      $subMenu.removeClass("active");
    } else {
      $(".mobile_sub").removeClass("active");
      $subMenu.addClass("active");
    }
  });
});
