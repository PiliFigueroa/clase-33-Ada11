// const formulario = document.querySelector("#formulario");
// let inputFullname = document.querySelector("#fullname");
// let inputEmail = document.querySelector("#email");
// let inputPassword = document.querySelector("#password");
// let inputRepeatPassword = document.querySelector("#repeatPassword");
// let btnSubmit = document.querySelector("#submit");

// let fullname, email, pass;

// const getData = () => {
//     fullname = inputFullname.value;
//     email = inputEmail.value;
//     pass = inputPassword.value;
    
//     inputFullname.value = "";
//     inputEmail.value = "";
//     inputPassword.value = "";
// }

// const printData = () => {
//     let box = document.querySelector(".data-box");
//     let p_password = document.querySelector(".password");
//     let p_fullname = document.querySelector(".fullname");
//     let p_email = document.querySelector(".email");

//     p_fullname.innerText = `Nombre: ${fullname}`;
//     p_email.innerText = `Email: ${email}`;
//     p_password.innerText = `Pasword: ${pass}`;
//     box.style.display = 'block';
// }

// const handleOnChange = (event) => {
//     let p_fullname = document.querySelector(".fullname"); 
//     console.log(event.target.value);
//     p_fullname.innerText += ` ${event.target.value}`;
// }

// const validatePassword = () => {
//     const success = document.querySelector('#password-success');
//     const alert = document.querySelector('#password-alert');
//     if (inputPassword.value === inputRepeatPassword.value) {
//         success.classList.remove('d-none');
//         btnSubmit.removeAttribute('disabled', 'disabled');
//     } else {
//         alert.classList.remove('d-none');
//         btnSubmit.setAttribute('disabled', 'disabled');
//     }
// }

// btnSubmit.addEventListener('click', (e) => {
//     e.preventDefault();
//     getData();
//     printData();
// });

// btnSubmit.onclick = (e) => {
//     e.preventDefault();
//     getData();
//     printData();   
// }

// inputFullname.addEventListener('click', (e) => console.log(e.target.value));

// inputFullname.onchange = (e) => {
//     handleOnChange(e);
// }

// inputRepeatPassword.onchange = validatePassword;