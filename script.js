// Toggle password visibility for login form
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#logpass');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('uil-eye-slash');
});

// Toggle password visibility for signup form
const togglePasswordSignUp = document.querySelector('#togglePasswordSignUp');
const passwordSignUp = document.querySelector('#logpass');

togglePasswordSignUp.addEventListener('click', function (e) {
    const type = passwordSignUp.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordSignUp.setAttribute('type', type);
    this.classList.toggle('uil-eye-slash');
});

// Form validation
document.querySelector('#loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Example of simple validation
    if (document.querySelector('#logemail').value === '' || document.querySelector('#logpass').value === '') {
        alert('Please fill out all fields');
    } else {
        alert('Login successful');
    }
});

document.querySelector('#signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Example of simple validation
    if (document.querySelector('#logname').value === '' || document.querySelector('#logemail').value === '' || document.querySelector('#logpass').value === '') {
        alert('Please fill out all fields');
    } else {
        alert('Signup successful');
    }
});
