document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    document.getElementById('signInForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Replace these variables with actual validation logic
        const usn = document.getElementById('signInUSN').value;
        const institution = document.getElementById('signInInstitution').value;
        const password = document.getElementById('signInPassword').value;

        // Replace this with actual validation logic
        if (usn === 'ENG22CS0495' && institution === 'DSU' && password === '123456') {
            window.location.href = 'mainmenu.html';
        } 
        else if (usn === 'ENG22CS0526' && institution === 'DSU' && password === '123456') 
            {  window.location.href = '3.html';
        }

        else {
            alert('Invalid credentials. Please try again.');
        }
    });

    document.getElementById('signUpForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle sign-up logic here
        alert('Sign-up functionality not implemented.');
    });
});
