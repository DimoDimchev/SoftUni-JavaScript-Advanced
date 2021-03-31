function solve() {
    let text = document.getElementById('input').innerHTML;
    let textList = text.split('.');

    let output = document.getElementById('output');

    for (let i = 0; i < textList.length; i += 3) {
        let paragraph = document.createElement('p');
        let str = '';

        for (let j = 0; j < 3; j++) {
            if (i + j < textList.length) {
                str += textList[i + j] + '.';
            }
        }

        paragraph.innerHTML = str;
        output.appendChild(paragraph);
    }
}