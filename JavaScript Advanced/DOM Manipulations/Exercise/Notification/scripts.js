function notify(message) {
    let notificationBox = document.getElementById('notification');
    notificationBox.innerHTML = message;
    notificationBox.style.display = 'block';

    setTimeout(() => {
        notificationBox.style.display = 'none';
    }, 2000);
}