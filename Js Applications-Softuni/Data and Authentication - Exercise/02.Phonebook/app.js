function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';
    const loadButton = document.querySelector('#btnLoad');
    const createButton = document.querySelector('#btnCreate');
    const deleteButton = document.querySelector('#delete');
    const phonebook = document.querySelector('#phonebook');

    loadButton.addEventListener('click', async(e) => {
        e.preventDefault();
        phonebook.textContent = '';
        const response = await fetch(baseUrl);
        const data = await response.json();

        Object.values(data).forEach((el) => {
            const li = document.createElement('li');
            li.textContent = `${el.person}: ${el.phone}`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete"
            deleteButton.addEventListener('click', async() => {
                const response = await fetch(`${baseUrl}/${el._id}`, {
                    method: 'DELETE'
                })
                const result = await response.json();
                loadButton.click();
            })
            li.appendChild(deleteButton)
            phonebook.appendChild(li);
        })
    })

    createButton.addEventListener('click', async(e) => {
       const person = document.querySelector('#person');
       const phone = document.querySelector('#phone');

       const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                person: person.value,
                phone: phone.value,
            }),
       })
       
       const data = await response.json();
       person.value = '';
       phone.value = '';
       loadButton.click();

    })

}

attachEvents();