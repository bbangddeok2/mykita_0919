$(document).ready(function () {
  $(".ham_icon i").click(function () {
    $(".mobile_menu").addClass("active");
    $(".ham_icon").addClass("hide"); // ← 햄버거 아이콘 숨기기
  });

  $(".mobile_menu i.fa-xmark").click(function () {
    $(".mobile_menu").removeClass("active");
    $(".ham_icon").removeClass("hide"); // ← 다시 보이기
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
