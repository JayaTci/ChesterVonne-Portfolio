// Adventure Time Intro Page Navigation

document.addEventListener('DOMContentLoaded', () => {
  const introContainer = document.querySelector('.intro-container');
  const enterButton = document.querySelector('.enter-button');
  let isNavigating = false;

  // Navigate to works page
  function navigateToWorks() {
    if (isNavigating) return;
    isNavigating = true;

    // Add fade-out class
    introContainer.classList.add('fade-out');

    // Navigate after animation
    setTimeout(() => {
      window.location.href = 'home.html';
    }, 400);
  }

  // Button click to navigate
  if (enterButton) {
    enterButton.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateToWorks();
    });
  }

  // Keyboard navigation (Enter or Space)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigateToWorks();
    }
  });
});
