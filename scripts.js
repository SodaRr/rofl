document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Сообщение отправлено!');
    this.reset();
});