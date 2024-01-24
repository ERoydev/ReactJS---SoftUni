function attachEvents() {
    const submitButton = document.querySelector('#submit');
    const refreshButton = document.querySelector('#refresh');
    const textChat = document.querySelector('#messages');

    submitButton.addEventListener('click', async () => {
        const name = document.querySelector("input[name='author']").value;
        const message = document.querySelector("input[name='content']").value;

        const response = await fetch('http://localhost:3030/jsonstore/messenger', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                author: name,
                content: message,
            }),
        })
        refreshButton.click();
    })

    refreshButton.addEventListener('click', () => {
        textChat.textContent = "";

        const messages = fetch('http://localhost:3030/jsonstore/messenger')
            .then(res => res.json())
            .then((data) => {
                const result = Object.values(data);
                
                for(let msg of result) {
                    textChat.textContent += `${msg.author}: ${msg.content}\n`
                }
            })
            .catch(err => console.log(err))
    })
}

attachEvents();