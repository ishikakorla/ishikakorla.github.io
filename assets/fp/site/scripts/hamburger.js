// Pseudocode plan:
//
// when #hamburger-btn is clicked:
//     if #nav-menu has .hidden:
//         remove .hidden from #nav-menu
//     else:
//         add .hidden to #nav-menu
//
// on page ready:
//     if browser is narrow (max-width: 767px):
//         add .hidden to #nav-menu
//     else (browser is wide):
//         remove .hidden from #nav-menu
//
// on window resize:
//     if browser is narrow (max-width: 767px):
//         add .hidden to #nav-menu
//     else (browser is wide):
//         remove .hidden from #nav-menu

$("#hamburger-btn").on("click", function() { // ← click event

  // ↓ action snippets ↓
  if ($("#nav-menu").hasClass("hidden")) { // ← element has css class

    // ↓ action snippets (class on element) ↓
    $("#nav-menu").removeClass("hidden");

    // ↑ action snippets (class on element) ↑

  } else { // ← element has css class

    // ↓ action snippets (class not on element) ↓
    $("#nav-menu").addClass("hidden");

    // ↑ action snippets (class not on element) ↑

  } // ← element has css class

  // ↑ action snippets ↑

}); // ← click event

$(document).ready(function() { // ← page ready event

  // ↓ action snippets ↓
  if (window.matchMedia("(max-width: 767px)").matches) { // ← get browser width

    // ↓ action snippets (< width) ↓
    $("#nav-menu").addClass("hidden");

    // ↑ action snippets (< width) ↑

  } else { // ← get browser width

    // ↓ action snippets (> width) ↓
    $("#nav-menu").removeClass("hidden");

    // ↑ action snippets (> width) ↑

  } // ← get browser width

  // ↑ action snippets ↑

}); // ← page ready event

$(window).on("resize", function() { // ← resize browser window event

  // ↓ action snippets ↓
  if (window.matchMedia("(max-width: 767px)").matches) { // ← get browser width
  
    // ↓ action snippets (< width) ↓
    $("#nav-menu").addClass("hidden");
    
    // ↑ action snippets (< width) ↑
  
  } else { // ← get browser width
  
    // ↓ action snippets (> width) ↓
    $("#nav-menu").removeClass("hidden");
    
    // ↑ action snippets (> width) ↑
  
  } // ← get browser width
  
  // ↑ action snippets ↑

}); // ← resize browser window event
