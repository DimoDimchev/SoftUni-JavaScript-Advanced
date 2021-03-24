function encodeAndDecodeMessages() {
    let senderArea = document.getElementsByTagName('textarea')[0];
    let receiverArea = document.getElementsByTagName('textarea')[1];

    let encodeButton = document.getElementsByTagName('button')[0];
    let decodeButton = document.getElementsByTagName('button')[1];

    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);


    function encodeMessage() {
        let encodedMessage = '';
        let message = senderArea.value;

        for (let i = 0; i < message.length; i++) {
            let currentCharValue = message.charCodeAt(i);
            encodedMessage += String.fromCharCode(++currentCharValue);
        }
        senderArea.value = '';
        receiverArea.value = encodedMessage;
    }

    function decodeMessage() {
        let decodedMessage = '';

        for (let i = 0; i < receiverArea.value.length; i++) {
            let currentCharValue = receiverArea.value.charCodeAt(i);
            decodedMessage += String.fromCharCode(--currentCharValue);
        }
        receiverArea.value = decodedMessage;
    }
}