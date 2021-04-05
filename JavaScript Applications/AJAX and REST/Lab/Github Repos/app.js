function loadRepos() {
    let user = document.getElementById('username').value;
    let repos = document.getElementById('repos');

    fetch(`https://api.github.com/users/${user}/repos`)
        .then((response) => response.json())
        .then(data => {
            repos.innerHTML = data.map(repo => `<li><a href="${repo.html_url}">${repo.full_name}</a></li>`).join('');
        });
}