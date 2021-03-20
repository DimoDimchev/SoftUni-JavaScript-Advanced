function growingWord() {
    let paragraphToEdit = document.querySelector('#exercise > p');
    let fontSize = 2;

    let colorChanges = {
        "blue": "green",
        "green": "red",
        "red": "blue"
    }

    if (!paragraphToEdit.hasAttribute('style')) {
        paragraphToEdit.setAttribute("style", `color:blue; font-size: ${fontSize}px`);
    } else {
        let currentFontSize = paragraphToEdit.style['font-size'];
        let currentColor = paragraphToEdit.style.color;
        fontSize = currentFontSize.substr(0, currentFontSize.length - 2) * 2;

        paragraphToEdit.setAttribute("style", `color:${colorChanges[currentColor]}; font-size: ${fontSize}px`);
    }
}