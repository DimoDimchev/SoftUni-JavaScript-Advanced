function focus() {
    let divElement = document.getElementsByTagName('div')[0];

    divElement.addEventListener('focus', function(evt) {
        if (evt.target && evt.target.nodeName === 'INPUT') {
            evt.target.parentElement.setAttribute('class', 'focused');
        }
    }, true);

    divElement.addEventListener('blur', function(evt) {
        if (evt.target && evt.target.nodeName === 'INPUT') {
            evt.target.parentElement.removeAttribute('class');
        }
    }, true);
}