const userBar = document.querySelector('#user');
const guestBar = document.querySelector('#guest');
const greetingBar = document.querySelector('nav p span');
const logoutBtn = document.querySelector('#logout');
const catches = document.querySelector('#catches');
const loadBtn = document.querySelector('.load');

const CatchesUrl = 'http://localhost:3030/data/catches';


function onLoad() {
    const token = sessionStorage.getItem("token");

    if(token == undefined) {
        userBar.style.display='none';
        guestBar.style.display='inline-block';
        greetingBar.textContent = 'guest';
    } else {
        guestBar.style.display='none';
        userBar.style.display='inline-block';  
        greetingBar.textContent = sessionStorage.getItem('email');

    }
}

onLoad();

logoutBtn.addEventListener('click', async(e) => {
    const response = await fetch('http://localhost:3030/users/logout', {
        method: "GET",
        headers: {
            "X-Authorization": sessionStorage.getItem("token"),
        },
    });

    sessionStorage.clear()
    onLoad();
})

loadBtn.addEventListener('click', async(e) => {
    e.preventDefault();
    const allCatches = await getAllCatches();

    allCatches.forEach((el) => {
        const catchEl = generateCatches(el);
        catches.appendChild(catchEl)
    })
})

async function getAllCatches() {
    const response = await fetch(CatchesUrl);
    const data = await response.json();
    return data;
}

function generateCatches(data) {
    const div = document.createElement('div');
    div.classList.add('catch');
    div.innerHTML = `
            <label>Angler</label>
            <input type="text" class="angler" value="${data.angler}">
            <label>Weight</label>
            <input type="text" class="weight" value="${data.weight}">
            <label>Species</label>
            <input type="text" class="species" value="${data.species}">
            <label>Location</label>
            <input type="text" class="location" value="${data.location}">
            <label>Bait</label>
            <input type="text" class="bait" value="${data.bait}">
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${data.captureTime}">
            <button class="update" data-id="07f260f4-466c-4607-9a33-f7273b24f1b4">Update</button>
            <button class="delete" data-id="07f260f4-466c-4607-9a33-f7273b24f1b4">Delete</button>
    `;
    return div;
}