const form = document.querySelector('form');
const errors = document.querySelector(".errors");
const BaseUrl = 'http://localhost:3030/users/register';

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    if(!email || !password || !rePass || password !== rePass) {
        throw new Error('Error')
    } else {
        try {
            const response = await fetch(BaseUrl, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })

            const result = await response.json();
            sessionStorage.setItem("email", result.email);
            sessionStorage.setItem("userId", result._id);
            sessionStorage.setItem("token", result.accessToken);
            document.querySelector('#home').click()

        } catch (error) {
            throw new Error(error);
        }
    }
})