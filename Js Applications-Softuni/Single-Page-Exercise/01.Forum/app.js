import { createTopic } from "./createTopic.js";
const main = document.querySelector('.post-view')
const baseUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts';
const allPosts = document.querySelector('.all-posts');
const topicBorder = document.querySelector('.new-topic-border');
const postView = document.querySelector('.post-view');

allPosts.style.display='none';

createTopic();

async function getAllTopics() {
    const response = await fetch(baseUrl);

    const data = await response.json();
    Object.values(data).forEach((el) => {
        showTopics(el);

        
    })
}


function showTopics(el) {
    const h3 = document.createElement('h3');
        h3.textContent = el.title;
        const p = document.createElement('p');
        p.innerHTML = `Username: <strong>${el.name}</strong>`;

        const date = document.createElement('p');
        date.innerHTML = `Date: <strong>${el.currentDate.creationDate}</strong>`;

        const div = document.createElement('div');
        const container = document.createElement('div');
        div.classList.add('topic-title')
        container.classList.add('topic-container');
        div.appendChild(h3);
        container.appendChild(date);
        container.appendChild(p);
        div.appendChild(container);

        main.appendChild(div);
        
        div.addEventListener('click', (e) => {
            allPosts.style.display='block';

            topicBorder.style.display='none';
            postView.style.display='none';
        })

}

getAllTopics()