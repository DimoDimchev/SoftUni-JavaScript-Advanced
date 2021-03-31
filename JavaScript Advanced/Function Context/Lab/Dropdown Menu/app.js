function solve() {
    let dropdownMenu = document.getElementById('dropdown-ul');
    let button = document.getElementById('dropdown');
    let box = document.getElementById('box');

    button.addEventListener('click', reveal);

    function reveal() {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
            box.style.backgroundColor = 'black';
            box.style.color = 'white';

        } else {
            dropdownMenu.style.display = 'block';
            let childrenArray = Array.from(dropdownMenu.children);

            childrenArray.forEach((element) => {
                element.addEventListener('click', () => {
                    box.style.backgroundColor = `${element.innerHTML}`;
                    box.style.color = 'black';
                })
            })
        }
    }
}