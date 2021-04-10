(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let resultSection = document.getElementById('allCats').firstElementChild;
        let cats = window.cats;
        let catView = document.getElementById('cat-template').innerHTML;
        let catTemplate = Handlebars.compile(catView);

        resultSection.innerHTML = catTemplate({cats});

        document.querySelectorAll('.showBtn').forEach(item => item.addEventListener('click', (evt)=> {
            if (evt.target.innerHTML === "Show status code") {
                evt.target.nextElementSibling.style.display = 'block';
                evt.target.innerHTML = "Hide status code";
            } else {
                evt.target.nextElementSibling.style.display = 'none';
                evt.target.innerHTML = "Show status code";
            }
        }));
    }
})()
