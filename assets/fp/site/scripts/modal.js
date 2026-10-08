// Pseudocode plan:
//
// when #thumb-cleangirl is clicked:
//     remove .hidden from #modal-cleangirl
//     add .hidden to #modal-cottage
//     add .hidden to #modal-darkacad
//     add .hidden to #modal-downtown
//     remove .hidden from #image-modal-overlay
//
// when #thumb-cottage is clicked:
//     add .hidden to #modal-cleangirl
//     remove .hidden from #modal-cottage
//     add .hidden to #modal-darkacad
//     add .hidden to #modal-downtown
//     remove .hidden from #image-modal-overlay
//
// when #thumb-darkacad is clicked:
//     add .hidden to #modal-cleangirl
//     add .hidden to #modal-cottage
//     remove .hidden from #modal-darkacad
//     add .hidden to #modal-downtown
//     remove .hidden from #image-modal-overlay
//
// when #thumb-downtown is clicked:
//     add .hidden to #modal-cleangirl
//     add .hidden to #modal-cottage
//     add .hidden to #modal-darkacad
//     remove .hidden from #modal-downtown
//     remove .hidden from #image-modal-overlay
//
// when #close-modal-btn is clicked:
//     add .hidden to #image-modal-overlay
//
// when #read-more-btn is clicked:
//     remove .hidden from #text-modal-overlay
//
// when #close-text-btn is clicked:
//     add .hidden to #text-modal-overlay



$("#thumb-cleangirl").on("click", function() { // ← click event

  // ↓ action snippets ↓
  $("#modal-cleangirl").removeClass("hidden");
  $("#modal-cottage").addClass("hidden");
  $("#modal-darkacad").addClass("hidden");
  $("#modal-downtown").addClass("hidden");
  $("#image-modal-overlay").removeClass("hidden");



  // ↑ action snippets ↑

}); // ← click event

$("#thumb-cottage").on("click", function() { // ← click event

  // ↓ action snippets ↓
  $("#modal-cleangirl").addClass("hidden");
  $("#modal-cottage").removeClass("hidden");
  $("#modal-darkacad").addClass("hidden");
  $("#modal-downtown").addClass("hidden");
  $("#image-modal-overlay").removeClass("hidden");




  // ↑ action snippets ↑

}); // ← click event

$("#thumb-darkacad").on("click", function() { // ← click event

  // ↓ action snippets ↓
  $("#modal-cleangirl").addClass("hidden");
  $("#modal-cottage").addClass("hidden");
  $("#modal-darkacad").removeClass("hidden");
  $("#modal-downtown").addClass("hidden");
  $("#image-modal-overlay").removeClass("hidden");




  // ↑ action snippets ↑

}); // ← click event

$("#thumb-downtown").on("click", function() { // ← click event

  // ↓ action snippets ↓
  $("#modal-cleangirl").addClass("hidden");
  $("#modal-cottage").addClass("hidden");
  $("#modal-darkacad").addClass("hidden");
  $("#modal-downtown").removeClass("hidden");
  $("#image-modal-overlay").removeClass("hidden");


  // ↑ action snippets ↑

}); // ← click event

$("#close-modal-btn").on("click", function() { // ← click event

  // ↓ action snippets ↓
  $("#image-modal-overlay").addClass("hidden");

  // ↑ action snippets ↑

}); // ← click event

$("#read-more-btn").on("click", function() { // ← click event

  // ↓ action snippets ↓
  $("#text-modal-overlay").removeClass("hidden");

  // ↑ action snippets ↑

}); // ← click event

$("#close-text-btn").on("click", function() { // ← click event

  // ↓ action snippets ↓
  $("#text-modal-overlay").addClass("hidden");

  // ↑ action snippets ↑

}); // ← click event
