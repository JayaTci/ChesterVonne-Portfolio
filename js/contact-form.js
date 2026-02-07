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

    // Add your Web3Forms access key here
    // Sign up at https://web3forms.com to get your free access key
    // formData.append('access_key', 'YOUR_ACCESS_KEY_HERE');

    // For now, we'll just show a demo message
    // Uncomment the code below when you have your access key

    /*
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
    */

    // Demo mode - remove this when you add your access key
    showStatus('success', 'Demo mode: Form validation successful! To enable actual email sending, add your Web3Forms access key in contact-form.js');
    setTimeout(() => {
      contactForm.reset();
    }, 2000);
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
