// ======================
// Portfolio JS Functionality
// ======================

// Initialize EmailJS with your public key
(function() {
  emailjs.init("h_v1cqprpf4DYOdJG"); // replace with your actual public key
})();

// Smooth scrolling for navbar
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Resume download handler
const resumeBtn = document.querySelector('.btn-outline');
if (resumeBtn) {
  resumeBtn.addEventListener('click', e => {
    e.preventDefault();
    const resumePath = 'Ifreen_Israr_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Ifreen_Israr_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

// Contact form handler
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = this.querySelector('input[placeholder="Your Email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    // EmailJS parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Ifreen Israr',
      message: message
    };

    emailjs.send('service_i2ews3g', 'template_3nwqp3k', templateParams)
      .then(() => {
        alert('✅ Message sent successfully! Thank you for reaching out.');
        contactForm.reset();
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        alert('⚠️ Sorry, something went wrong. Please try again later.');
      });
  });
}
