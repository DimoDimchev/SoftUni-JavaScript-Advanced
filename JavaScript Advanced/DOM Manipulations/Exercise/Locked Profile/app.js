function lockedProfile() {
    let mainDiv = document.getElementById('main');



    mainDiv.addEventListener('click', function(evt) {
        if (evt.target && evt.target.nodeName === 'BUTTON') {
            let profile = evt.target.parentElement;
            let lockedRadio = profile.children[2];

            if (!lockedRadio.checked) {
                if (evt.target && evt.target.nodeName === 'BUTTON' && evt.target.innerHTML === "Show more") {
                    evt.target.previousElementSibling.style.display = 'block';
                    evt.target.innerHTML = "Hide it";
                } else if (evt.target && evt.target.nodeName === 'BUTTON' && evt.target.innerHTML === "Hide it") {
                    evt.target.previousElementSibling.style.display = 'none';
                    evt.target.innerHTML = "Show more";
                }
            }
        }
    }, true);
}