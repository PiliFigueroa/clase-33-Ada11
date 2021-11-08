const formulario = document.querySelector("#formulario");
let inputFullname = document.querySelector("#fullname");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let inputRepeatPassword = document.querySelector("#repeatPassword");
let inputCheck = document.querySelector("#checkId");
let select = document.querySelector("#cars");
let btnSubmit = document.querySelector("#submit");

let fullname, email, pass;

const getData = () => {
    fullname = inputFullname.value;
    email = inputEmail.value;
    pass = inputPassword.value;
    
    formulario.reset() 
}

const printData = () => {
    let box = document.querySelector(".data-box");
    let p_password = document.querySelector(".password");
    let p_fullname = document.querySelector(".fullname");
    let p_email = document.querySelector(".email");

    p_fullname.innerText = `Nombre: ${fullname}`;
    p_email.innerText = `Email: ${email}`;
    p_password.innerText = `Pasword: ${pass}`;
    box.style.display = 'block';
}

const validatePassword = () => {
    const success = document.querySelector('#password-success');
    const alert = document.querySelector('#password-alert');
    if (inputPassword.value === inputRepeatPassword.value) {
        success.classList.remove('d-none');
        alert.classList.add('d-none');
        btnSubmit.removeAttribute('disabled', 'disabled');
        return true
    } else {
        alert.classList.remove('d-none');
        success.classList.add('d-none');
        btnSubmit.setAttribute('disabled', 'disabled');
        return false
    }
}

// Acceder a un input type check
/*

inputCheck.checked -> true/false

*/

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (validatePassword()) {
        getData();
    } else {
        alert('Tus datos son incorrectos')
    }
});

inputRepeatPassword.addEventListener('change', validatePassword)