const userBar = document.querySelector('#user');
const guestBar = document.querySelector('#guest');
const greetingBar = document.querySelector('nav p span');
const logoutBtn = document.querySelector('#logout');
const catches = document.querySelector('#catches');
const loadBtn = document.querySelector('.load');
const addBtn = document.querySelector('.add');

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
        addBtn.disabled = false;

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
    catches.innerHTML = '';
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
    const isOwner = data._ownerId === sessionStorage.getItem('userId');
    div.innerHTML = `
            <label>Angler</label>
            <input type="text" class="angler" value="${data.angler}" ${!isOwner ? "disabled":"" }>
            <label>Weight</label>
            <input type="text" class="weight" value="${data.weight}" ${!isOwner ? "disabled":"" }>
            <label>Species</label>
            <input type="text" class="species" value="${data.species}" ${!isOwner ? "disabled":"" }>
            <label>Location</label>
            <input type="text" class="location" value="${data.location}" ${!isOwner ? "disabled":"" }>
            <label>Bait</label>
            <input type="text" class="bait" value="${data.bait}" ${!isOwner ? "disabled":"" }>
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${data.captureTime}" ${!isOwner ? "disabled":"" }>
            <button class="update" data-id="${data._id}" disabled>Update</button>
            <button class="delete" data-id="${data._id}" disabled>Delete</button>
    `;

    if(data._ownerId === sessionStorage.getItem('userId')) {
        const btns = div.querySelectorAll('button');
        Array.from(btns).forEach(x => {
            x.disabled = false
            if (x.classList.contains("delete")) {
                return x.addEventListener('click', onDelete)
            } 
            x.addEventListener('click', onEdit)
        })
        
    }
    return div;
}

async function onDelete(e) {
    e.preventDefault();
    const dataId = e.target.dataset.id;
    
    try {
        const response = await fetch(`${CatchesUrl}/${dataId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('token'),
        }
    })

    loadBtn.click();
    } catch (error) {
        throw new Error("Error");
    }
}

async function onEdit(e) {
    e.preventDefault();
    const dataId = e.target.dataset.id;
    const inputs = e.target.parentElement.querySelectorAll('input');

    const angler = inputs[0].value;
    const weight = Number(inputs[1].value);
    const species = inputs[2].value;
    const location = inputs[3].value;
    const bait = inputs[4].value;
    const captureTime = Number(inputs[5].value);
    const _ownerId = sessionStorage.getItem("token");

    if(!angler || !weight || !species || !loadBtn || !bait || !captureTime) {
        throw new Error("missing fields")
    }

    const data = {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime
    }

    const response = await fetch(`${CatchesUrl}/${dataId}`, {
        method: "PUT",
        headers: {
            'Content-Type': "application/json",
            "X-Authorization": sessionStorage.getItem("token"),
        },
        body: JSON.stringify(data),
    })

    loadBtn.click();

    
    
}

addBtn.addEventListener('click', async(e) => {
    e.preventDefault();
    const addForm = document.querySelector('#addForm');
    const formData = new FormData(addForm);
    const angler = formData.get('angler');
    const weight = formData.get('weight');
    const species = formData.get('species');
    const location = formData.get('location');
    const bait = formData.get('bait');
    const captureTime = formData.get('captureTime')

    if(!angler || !weight || !species || !loadBtn || !bait || !captureTime) {
        throw new Error("missing fields")

    } else {
        const response = await fetch(CatchesUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('token'),
        },
        body: JSON.stringify({
            angler,
            weight,
            species,
            location,
            bait,
            captureTime,
        })
    });

    loadBtn.click();
    }
    
    
})
