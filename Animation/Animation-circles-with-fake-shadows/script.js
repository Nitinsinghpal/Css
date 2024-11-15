document.addEventListener('DOMContentLoaded', function() {
    debugger
    const scroller = document.getElementById('scroller');
    const scrollAmount = 200; // Adjust scroll amount as needed
    
    // Function to scroll left when left arrow is clicked
    document.getElementById('scrollLeft').addEventListener('click', function() {
      scroller.scrollLeft -= scrollAmount;
    });
    
    // Function to scroll right when right arrow is clicked
    document.getElementById('scrollRight').addEventListener('click', function() {
      scroller.scrollLeft += scrollAmount;
    });
  });
  