
export function loginUser() {
    const form = document.querySelector('#login-form');
    const errors = document.querySelector('.errors');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const emailUser = formData.get('email');
        const passwordUser = formData.get('password');

        if (!emailUser || !passwordUser) {
            throw new Error("incorrect user credentials")
        } else {
            const response = await fetch('http://localhost:3030/users/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: emailUser,
                    password: passwordUser
                })
            })

            if (response.status !== 200) {
                errors.innerHTML = '';
                const p = document.createElement('p');
                p.textContent = "Email or password is incorrect. Please try again!"
                p.style.color='red';
                errors.appendChild(p);
                form.reset();
                
            } else {
                const data = await response.json();
                sessionStorage.setItem("token", data.accessToken);
                sessionStorage.setItem("userId", data._id);
                sessionStorage.setItem("userEmail", data.email);
                window.location.href="./index.html";
            }

        }
    })
}