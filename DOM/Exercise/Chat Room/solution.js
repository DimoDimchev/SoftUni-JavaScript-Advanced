function solve() {
    let sendButton = document.getElementById('send');
    let textField = document.getElementById('chat_input');


    sendButton.addEventListener('click', function () {
        let messageDiv = document.createElement('div');
        let messages = document.getElementById('chat_messages');
        let messageContent = textField.value;

        messageDiv.setAttribute('class', 'message my-message');
        messageDiv.innerHTML = messageContent;

        messages.appendChild(messageDiv);
        textField.value = '';
    })
}


