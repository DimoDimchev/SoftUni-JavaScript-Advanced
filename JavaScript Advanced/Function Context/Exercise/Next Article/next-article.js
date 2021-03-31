function getArticleGenerator(articles) {
    let contentDiv = document.getElementById('content');

    return function showNext() {
        if (articles.length > 0) {
            let article = document.createElement('article');
            article.innerHTML = articles.shift();
            contentDiv.appendChild(article);
        }
    }
}