function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let paragraph = document.getElementById('extra');

    if (button.innerHTML === "More") {
        button.innerHTML = "Less";
        paragraph.style.display = "block";
    } else {
        button.innerHTML = "More";
        paragraph.style.display = "none";
    }
}