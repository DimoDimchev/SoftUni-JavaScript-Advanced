function loadRepos() {
    let resultDiv = document.getElementById('res');
    let loadButton = document.getElementsByTagName('button')[0];

    let uri = "https://api.github.com/users/dimodimchev/repos"
    let HttpRequest = new XMLHttpRequest();

    HttpRequest.addEventListener('readystatechange', function () {
        if (this.readyState === 4 && this.status === 200) {
            resultDiv.textContent = this.responseText;
        }
    })

    HttpRequest.open("GET", uri);

    loadButton.addEventListener('click', function () {
        HttpRequest.send();
    })
}