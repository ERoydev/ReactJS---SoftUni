
export function registerUser(email, password) {
    const form = document.querySelector('#register-form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const emailUser = formData.get('email');
        const passwordUser = formData.get('password');
        const rePass = formData.get('repeatPassword');

        if (!emailUser || !passwordUser || !rePass || passwordUser !== rePass) {
            throw new Error("missing fields or wrong password");
        } else {
            try {
                const response = await fetch('http://localhost:3030/users/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: emailUser,
                    password: passwordUser,
                    })
                })

                const data = await response.json();
                sessionStorage.setItem("token", data.accessToken);
                sessionStorage.setItem("userId", data._id);
                sessionStorage.setItem("userEmail", data.email);
                window.location.href="./index.html";
            
            } catch (error) {
                throw new Error("error");
            }


        }
        })  
}