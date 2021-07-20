$(".menubar").on("click", function () {
  $(".navlinks").css({ 'right': "0" });
});

$(".fa-times").on("click", function () {
  $(".navlinks").css({ 'right': "-100vw" });
});
