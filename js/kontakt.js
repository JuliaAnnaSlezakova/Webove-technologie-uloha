document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Validate form fields
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const radio = document.querySelector('input[name="radio"]:checked');
      const checkbox = document.getElementById('checkbox').checked;
  
      if (name === '' || email === '' || message === '' || !radio || !checkbox) {
        alert('Please fill out all fields.');
        return;
      }
  
      // Validate email format
      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // Form is valid, submit the form
      alert('Form submitted successfully!');
      form.reset();
    });
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  