document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      const name = document.getElementById('meno').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const radio = document.querySelector('input[name="radio"]:checked');
      const checkbox = document.getElementById('checkbox').checked;
  
      if (name === '' || email === '' || message === '' || !radio || !checkbox) {
        alert('Vyplňte prosím všetky polia.');
        return;
      }
  
      if (!validateEmail(email)) {
        alert('Vložte platnú emailovú adresu.');
        return;
      }
  
      alert('Úspešne odoslané!');
      form.reset();
    });
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  