function deleteByEmail() {
    let table = document.getElementById('customers');
    let tableElements = table.children[1].children;
    let tableArray = Array.from(tableElements);
    let results = document.getElementById('result');

    let inputEmail = document.getElementsByTagName('input')[0].value;
    let deleted = false;

    for (let x of tableArray) {
        let email = x.children[1].innerHTML;
        if (email === inputEmail) {
            x.remove();
            deleted = true;
            results.innerHTML = 'Deleted.'
        }
    }

    if (!deleted) {
        results.innerHTML = 'Not found.';
    }
}