$(document).ready(function () {
  var $smooth = $('a[href^="#"]');
  $smooth.on("click", function () {
    var speed = 800;
    var href = $(this).attr("href");
    var target = $(
      href === "#top" || href === "#" || href === "" ? "html" : href
    );
    var header = $("header").outerHeight();
    var position = target.offset().top - header;
    if (!$("body html").is(":animated")) {
      $("body,html").stop().animate({ scrollTop: position }, speed, "swing");
    }
    return false;
  });
  $("select").select2({
    width: "100%",
    placeholder: "",
    minimumResultsForSearch: Infinity,
  });

  $("#resetBtn").on("click", function () {
    $("select").val("").trigger("change");
  });
});
