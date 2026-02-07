// Contact Form Handler
// This script handles form submission using Web3Forms (free service)
// To use it, sign up at https://web3forms.com/ and get your access key

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);

    // Add Web3Forms access key
    formData.append('access_key', 'e3a1d2c4-0c38-4595-b0a2-777be25bb83d');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        showStatus('success', 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!');
        contactForm.reset();
      } else {
        showStatus('error', 'Oops! Something went wrong. Please try again or contact me directly via email.');
      }
    } catch (error) {
      showStatus('error', 'Network error. Please check your connection and try again.');
    }
  });

  function showStatus(type, message) {
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;

    // Auto-hide after 5 seconds
    setTimeout(() => {
      formStatus.className = 'form-status';
    }, 5000);
  }
});
