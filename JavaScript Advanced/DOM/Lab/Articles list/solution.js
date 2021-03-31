function createArticle() {
    let title = document.getElementById('createTitle');
    let content = document.getElementById('createContent');

    let articles = document.getElementById('articles');
    let article = document.createElement('article');

    let articleHeading = document.createElement('h3');
    let articleContent = document.createElement('p');

    if (title.value && content.value) {
        articleHeading.innerHTML = title.value;
        articleContent.innerHTML = content.value;

        article.appendChild(articleHeading);
        article.appendChild(articleContent);

        articles.appendChild(article);

        title.value = '';
        content.value = '';
    }
}