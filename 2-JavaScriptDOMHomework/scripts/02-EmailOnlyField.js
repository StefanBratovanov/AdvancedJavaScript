function validateEmail() {
    var inputEmail = document.getElementById('inputText').value;
    var appendDiv = document.getElementById("appendHere");
    appendDiv.innerText = inputEmail;
    var emailRegex = /[a-zA-Z0-9_]{3,}@[a-zA-Z0-9_]{3,}.[a-zA-Z0-9_]{2,4}/g;
    var validMail = inputEmail.match(emailRegex);


    if (validMail) {
        appendDiv.style.backgroundColor = 'lightgreen';
    } else {
        appendDiv.style.backgroundColor = 'red';
    }
}