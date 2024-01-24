const form = document.querySelector('form');
const errors = document.querySelector('.errors');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
                })
            });

        if(response.status != 200) {
            const p = document.createElement('p');
            p.textContent = 'This account dont exists.';
            p.style.color='red';
            errors.appendChild(p);
            
        } else {
            const data = await response.json();
            sessionStorage.setItem("token", data.accessToken);
            sessionStorage.setItem("userId", data._id);
            sessionStorage.setItem("email", data.email);
            document.querySelector('#home').click();
        }

    } catch (error) {
        throw new Error(error);
    }

})