window.onload= function () {
    window.scrollTo(0, 0);
};


let submit = document.getElementById('submit');
let messageBox = document.getElementById('messageInput');
let nameBox = document.getElementById('nameInput');

submit.addEventListener('click', validateMessage);

function validateMessage(){
    if(messageBox.value !== '' && nameBox.value !== ''){
        alert('\nMessage sent!\n\nThank you for time!');
    } else {
        alert('\nMessage NOT sent!!!\n\nFill in all the fields in the contact form!');
}}
