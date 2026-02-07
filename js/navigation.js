// Navigation and Interactions

document.addEventListener('DOMContentLoaded', () => {
  // Accordion functionality
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');

  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', !isExpanded);
    });
  });

  // Email copy functionality
  const emailCopyBtn = document.querySelector('.email-copy-btn');

  if (emailCopyBtn) {
    emailCopyBtn.addEventListener('click', async () => {
      const email = emailCopyBtn.getAttribute('data-email');

      try {
        await navigator.clipboard.writeText(email);
        emailCopyBtn.classList.add('copied');

        setTimeout(() => {
          emailCopyBtn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy email:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand('copy');
          emailCopyBtn.classList.add('copied');

          setTimeout(() => {
            emailCopyBtn.classList.remove('copied');
          }, 2000);
        } catch (err2) {
          console.error('Fallback copy failed:', err2);
        }

        document.body.removeChild(textArea);
      }
    });
  }

  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});
