const btn = document.getElementById('contactBtn');
const contact = document.getElementById('contact');

btn.addEventListener('click', function() {
    if (contact.style.display === 'none') {
        contact.style.display = 'block';
        btn.textContent = 'Hide Contact';
    } else {
        contact.style.display = 'none';
        btn.textContent = 'Show Contact';
    }
});