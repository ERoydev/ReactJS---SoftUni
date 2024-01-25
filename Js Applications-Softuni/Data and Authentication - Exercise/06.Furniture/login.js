async function registerUser(email, password) {
  const baseUrl = 'http://localhost:3030/users/register';
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    })
  })

  const data = await response.json();
  return data;
};

async function loginUser(email, password) {
    const baseUrl = 'http://localhost:3030/users/login';

    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password, password,
        })
    })

    if(response.status == 200) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Such user dont exists.');
    };

};

function solve() {
  const registerForm = document.querySelector('#registerForm');
  const loginForm = document.querySelector('#loginForm');

  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(registerForm);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');


    if (!email || !password || !rePass || password !== rePass) {
      throw new Error("missing fields or wrong password");

    } else {
      const data = await registerUser(email, password);
      sessionStorage.setItem("token", data.accessToken);
      sessionStorage.setItem("userId", data._id);
         
      window.location.href="./homeLogged.html";
    }
  })

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(loginForm);
    const email = formData.get('email');
    const password = formData.get('password');

    console.log(email, password)

    if (!email || !password) {
      throw new Error("missing fields or wrong password");

    } else {
      const data = await loginUser(email, password);
      sessionStorage.setItem("token", data.accessToken);
      sessionStorage.setItem("userId", data._id);
         
      window.location.href="./homeLogged.html";
    }
  })

};

solve();