function loadCommits() {
    let userName = document.getElementById('username');
    let repo = document.getElementById('repo');
    let commits = document.getElementById('commits');

    fetch(`https://api.github.com/repos/${userName.value}/${repo.value}/commits`)
        .then(response => {
            if (response.status === 404) {
                throw new Error(`<li>${response.status} (${response.statusText})</li>`);
            }
            return response;
        })
        .then((response) => response.json())
        .then(data => {
            commits.innerHTML = data.map(x => `<li>${x.commit.author.name}: ${x.commit.message}</li>`).join('');
        })
        .catch(err => {
            commits.innerHTML = err.message;
        });
}