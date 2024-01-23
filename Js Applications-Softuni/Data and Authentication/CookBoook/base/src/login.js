const form = document.querySelector('form');


async function loginUser (userData) {
    const response = await fetch('http://localhost:3030/users/login', {
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
    if(data.accessToken !== undefined) {
        localStorage.setItem('token', data.accessToken);
         window.location.pathname = '/Data%20and%20Authentication/CookBoook/base/index.html';
    } else {
        console.log('no such user')
    }
   
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries())
 
    loginUser(userData);
    form.reset();

});