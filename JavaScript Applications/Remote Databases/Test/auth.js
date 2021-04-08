// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyALen6KWz7kY5TtbWAojDcU2myBmMZtGD8",
    authDomain: "test-project-ecb56.firebaseapp.com",
    projectId: "test-project-ecb56",
    databaseURL: "https://test-project-ecb56-default-rtdb.firebaseio.com/",
    storageBucket: "test-project-ecb56.appspot.com",
    messagingSenderId: "297161092378",
    appId: "1:297161092378:web:ee194f0fe934e3100cd0a3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let auth = firebase.auth()

let loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', onUserLogin);

function onUserLogin(e) {
    let loginForm = document.getElementsByClassName('login-form')[0];
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let output = document.getElementById('output');

    auth.signInWithEmailAndPassword(username.value, password.value)
        .then(res => {
            loginForm.style.display = 'none';
            output.innerText = `User ${res.user.email} logged in`;
        })
        .catch(err => {
            console.log(err);
            output.innerText = 'Incorrect credentials';
        })
}