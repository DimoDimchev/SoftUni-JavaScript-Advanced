function solve() {
    let links = document.querySelectorAll('a');
    let paragraphs = document.querySelectorAll('p');

    for (let i = 0; i < links.length; i++) {
        visitedTimes(links[i], paragraphs[i]);
    }

    function visitedTimes(link, paragraph) {
        link.addEventListener('click', function (event) {
            let count = Number(paragraph.innerHTML.split(' ')[1]) + 1;
            paragraph.innerHTML = `visited ${count} times`;
        })
    }
}