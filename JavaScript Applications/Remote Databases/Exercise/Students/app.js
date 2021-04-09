let uri = `https://test-project-ecb56-default-rtdb.firebaseio.com`;
let studentId = 0;

let submitButton = document.getElementById('submit');

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let facultyNumber = document.getElementById('facultyNumber');
let grade = document.getElementById('grade');

let studentTable = document.getElementById('studentTable');

submitButton.addEventListener('click', addStudent);
window.addEventListener('load', loadStudents);

function createDOMElement(tag, attributes, content, ...children) {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    if (content !== '') {
        element.textContent = content;
    }

    element.append(...children);
    return element;
}

function addStudent() {
    if (firstName.value !== "" && lastName.value !== "" && facultyNumber.value !== "" && grade.value !== "") {
        fetch(uri + `/students.json`, {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                id: studentId,
                firstName: firstName.value,
                lastName: lastName.value,
                facultyNumber: facultyNumber.value,
                grade: grade.value
            })
        })
            .then(res => {
                firstName.value = "";
                lastName.value = "";
                facultyNumber.value = "";
                grade.value = "";
                studentId++;
                loadStudents();
            })
    }
}

function loadStudents() {
    fetch(uri + `/students.json`)
        .then(res => res.json())
        .then(data => {
            let fragment = new DocumentFragment();
            Object.entries(data).forEach(([key, {firstName, lastName, id, facultyNumber, grade}]) => {
                let tr = createDOMElement('tr', {}, '',
                    createDOMElement('td', {'id': key}, id),
                    createDOMElement('td', {}, firstName),
                    createDOMElement('td', {}, lastName),
                    createDOMElement('td', {}, facultyNumber),
                    createDOMElement('td', {}, grade));
                fragment.appendChild(tr);
            });

            studentTable.innerHTML = '';
            studentTable.appendChild(fragment);
        })
}