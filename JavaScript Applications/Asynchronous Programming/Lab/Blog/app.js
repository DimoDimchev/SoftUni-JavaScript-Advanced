function attachEvents() {
    let body = document.getElementsByTagName('body')[0];

    let uri = `https://blog-apps-c12bf.firebaseio.com/`;
    let loadButton = document.getElementById('btnLoadPosts');
    let postsSelect = document.getElementById('posts');
    let viewPostButton = document.getElementById('btnViewPost');

    let postTitle = document.getElementById('post-title');
    let postBody = document.getElementById('post-body');
    let postComments = document.getElementById('post-comments');

    loadButton.addEventListener('click', (e) => {
        fetch(uri + 'posts.json')
            .then(response => response.json())
            .then((data) => {
                postsSelect.innerHTML = Object.keys(data).map(x => `<option value="${x}">${data[x].title}</option>`).join('');
            })
    })

    viewPostButton.addEventListener('click', (e) => {
        let currentPostId;

        fetch(uri + `/posts/${postsSelect.value}.json`)
            .then(response => response.json())
            .then((data) => {
                postTitle.innerHTML = data.title;
                postBody.innerHTML = data.body;

                currentPostId = data.id;
                return fetch(uri + `comments.json`)
            })
            .then(response => response.json())
            .then((data) => {
                postComments.innerHTML = Object.values(data).filter(x => x.postId === currentPostId).map(x => `<li>${x.text}</li>`).join('');
                // console.log(data)
            })
    })


}

attachEvents();