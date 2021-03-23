function create(words) {
    let allDivs = document.getElementById('content');

    words.forEach(function (element) {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `<p style="display: none">${element}</p>`;

        newDiv.addEventListener('click', revealText);

        allDivs.appendChild(newDiv);
    })

    function revealText(e) {
        if (e.target && e.target.nodeName === 'DIV') {
            e.target.firstElementChild.style.display = 'block';
        }
    }
}