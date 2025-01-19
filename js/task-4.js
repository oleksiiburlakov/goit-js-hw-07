'use strict';

const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', event => {
	event.preventDefault();

    const email = registerForm.elements.email.value.trim();
    const password = registerForm.elements.password.value.trim();

    if(email === '' || password === ''){
        alert('Please fill in all the fields!');
        return;
    }

    const formData = { 
        email: email, 
        password: password,
    };

    console.log(formData);
    registerForm.reset();
});