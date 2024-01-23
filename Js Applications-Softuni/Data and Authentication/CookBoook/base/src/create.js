const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const token = localStorage.getItem("token");

    fetch('http://localhost:3030/data/recipes', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({
            name: data.name,
            img: data.image,
            ingredients: data.ingredients,
            steps: data.steps,
        }),
    })
        .then((res) => {
            if(res.status == 200) {
                return res.json()
            } else {
                throw new Error('Error')
            }
        })
        .then((data) => {
             window.location.pathname = '/Data%20and%20Authentication/CookBoook/base/index.html';
        })
        .catch(err => console.log(err))
})