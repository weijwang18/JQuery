// $(document).ready(function () {
//   $(".clickable").click(function () {
//     $("#walrus-showing").toggle();
//     $("#walrus-hidden").toggle();
//   });
// });

// $(document).ready(function () {
//   $(".click").click(function () {
//     $(".hide").toggle().fadeIn();
//     $(".show").toggle().fadeOut();
//   });
// });

// // With the element initially hidden, we can show it slowly:
// $("#clickme").fadeout(function () {
//   $("#book").fadeIn("slow", function () {
//     // Animation complete
//   });
// });

// $(document.body).ready(function () {
//   $(".fadeIn").first().fadeOut("slow");
// });

// $(document).ready(function () {
//   $(".fadeOut").click(function () {
//     $(".fadeOut").fadeOut("slow");
//   });
// });
// $(document).ready(function () {
//   $("button")
//     .first()
//     .click(function () {
//       $(".first").first().fadeToggle("slow", "linear");
//     });
//   $("button")
//     .last()
//     .click(function () {
//       $(".second")
//         .last()
//         .fadeToggle("fast", function () {
//           $("#log").append("<div>finished</div>");
//         });
//     });
// });

$(document).ready(function () {
  $("button").click(function () {
    $("p").slideToggle("slow");
  });
});
