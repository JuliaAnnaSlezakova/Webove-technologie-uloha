document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('meno').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const radio = document.querySelector('input[name="mesto"]:checked');
    const checkbox = document.getElementById('agree').checked;

    if (name === '') {
      alert('Napíšte Vaše meno.');
      return;
    }

    if (email === '' || !validateEmail(email)) {
      alert('Vložte platnú emailovú adresu.');
      return;
    }

    if (!radio) {
      alert('Vyberte mesto.');
      return;
    }

    if (!checkbox) {
      alert('Musíte súhlasiť so spracovaním osobných údajov.');
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
