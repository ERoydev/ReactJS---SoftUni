const form = document.querySelector('form');
const errors = document.querySelector('#errors');

async function registerUser (userData) {
    const response = await fetch('http://localhost:3030/users/register', {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify({
            email: userData.email,
            password: userData.password,
        }),
    })
    const data = await response.json();
    localStorage.setItem('token', data.accessToken);
    window.location.pathname = '/Data%20and%20Authentication/CookBoook/base/index.html';
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries())

    if(userData.password == userData.rePass) {  
        registerUser(userData);
        form.reset();
    } else {
        const msg = document.createElement('p');
        msg.textContent = "Passwords do not match!";
        errors.appendChild(msg);
    }
});