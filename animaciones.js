// Create the observer
const observer = new IntersectionObserver(entries => {
    // We will fill in the callback later...
  });
  
  // Tell the observer which elements to track
  observer.observe(document.querySelector('.square'));

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // It's visible. Add the animation class here!
    }
  });