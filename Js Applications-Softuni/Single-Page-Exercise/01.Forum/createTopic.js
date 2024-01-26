
class GenerateDate {
    constructor() {
        this.creationDate = new Date();
    }
}


export function createTopic() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts';
    const form = document.querySelector('form');
    const submitBtn = document.querySelector('.public');
    const cancelBtn = document.querySelector('.cancel');

    submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const title = formData.get('topicName');
    const name = formData.get('username');
    const text = formData.get('postText');
    const currentDate = new GenerateDate();

    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            name,
            text,
            currentDate,
        })
    })
    const data = await response.json();
    form.reset();

    console.log(data);
})

cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
})

}
