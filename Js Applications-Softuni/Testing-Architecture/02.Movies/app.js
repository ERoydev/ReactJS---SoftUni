import * as api from "./api.js";
import { registerUser } from "./registerUser.js";
import { loginUser } from "./loginUser.js";

const allSections = document.querySelectorAll('section');
const movieList = document.querySelector('#movies-list');

// Navigation Links 
const homeBtn = document.querySelector('.homeLink');
const registerBtn = document.querySelector('.registerLink');
const loginBtn = document.querySelector('.loginLink');
const logoutBtn = document.querySelector('.logoutLink')
// 



homeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    homePage();
})

registerBtn.addEventListener('click', () => {
    toggleRegisterForm();
})

loginBtn.addEventListener('click', () => {
    toggleLoginForm();
})

logoutBtn.addEventListener('click', async () => {
    const response = await fetch('http://localhost:3030/users/logout', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem("token"),
        }
    })

    if (response.status === 204) {
        sessionStorage.clear();
        toggleNavigation();
    } else {
        throw new Error("you are not logged in to log out!")
    }
    
})

function toggleNavigation() {
    const userNav = document.querySelectorAll('.nav-item.user');
    const guestNav = document.querySelectorAll('.nav-item.guest');
    const greetings = document.querySelector('#welcome-msg');

    if (sessionStorage.getItem("token")) {
        userNav.forEach(x => x.style.display = 'block');
        guestNav.forEach(x => x.style.display = 'none');
        greetings.innerHTML = `Welcome, ${sessionStorage.getItem("userEmail")}`;
    } else {
        userNav.forEach(x => x.style.display = 'none');
        guestNav.forEach(x => x.style.display = 'block');
    }
}

toggleNavigation();


async function homePage() {
    allSections.forEach((x) => {
    if(x.id === "home-page" || x.id === 'movie') {
        x.style.display='block';
        return;
    } else if (sessionStorage.getItem("token") && x.id === 'add-movie-button') {
        x.addEventListener('click', addMovie)
        x.style.display='block';
        return;
    }
    x.style.display='none';
    })

    const movies = await api.getAllMovies();
    movieList.innerHTML = '';
        movies.forEach((x) => {
        const li = document.createElement('li');
        li.classList.add('movie-list-item');
        li.setAttribute('id', x._id);
        const div = document.createElement('div');

        const p = document.createElement('p');
        const button = document.createElement('button');
        
        const desc = document.createElement('span');
        desc.textContent = 'Read more in details...'
        button.textContent = "Details";
        button.classList.add('movie-list-button')
        button.addEventListener('click', movieDetails)

        p.innerHTML = `<strong>${x.title}</strong>`;
        li.innerHTML = `<img src="${x.img}" class="movie-img" />`;
        li.appendChild(p);
        li.appendChild(desc)
        div.appendChild(button);
        li.appendChild(div);
        movieList.appendChild(li);

    })
}

homePage();

async function toggleRegisterForm() {
    const signUpSection = document.querySelector('#form-sign-up');
    hideAllSections();
    signUpSection.style.display='block';
    registerUser();   
}

function toggleLoginForm() {
    const loginSection = document.querySelector('#form-login');
    hideAllSections();
    loginSection.style.display='block';
    loginUser();
}

function hideAllSections() {
    allSections.forEach((x) => {
    x.style.display='none';
    })
};


function addMovie(e) {
    e.preventDefault();
    const addMovieSection = document.querySelector('#add-movie');
    hideAllSections();
    addMovieSection.style.display='block';
    const form = document.querySelector('#add-movie-form');
    const errors = document.querySelector('#add-movie .errors');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const movieTitle = formData.get('title');
        const movieDescription = formData.get('description');
        const movieImg = formData.get('img');


        if (!movieTitle || !movieDescription || !movieImg) {
            errors.innerHTML = '';
            const p = document.createElement('p');
            p.textContent= "Empty fields are not acceptable"
            p.style.color='red';
            errors.appendChild(p);
            form.reset();
        } else {
            await api.createMovie(movieTitle, movieDescription, movieImg);
            window.location.href="./index.html";
        }
    })


}

async function movieDetails(e) {
    e.preventDefault();
    const movieExampleSection = document.querySelector('#movie-example');
    hideAllSections();
    movieExampleSection.style.display='block';
    const movieId = e.target.parentNode.parentNode.id;


    const response = await fetch(`http://localhost:3030/data/movies/${movieId}`);
    const data = await response.json();

    if (sessionStorage.getItem('userId') === data._ownerId) {
        const el = `
    <div class="container">
          <div class="row bg-light text-dark">
            <h1>Movie title: ${data.title}</h1>

            <div class="col-md-8">
              <img
                class="img-thumbnail"
                src="${data.img}"
                alt="Movie"
              />
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>
                ${data.description}
              </p>
              <a class="btn btn-danger" href="#">Delete</a>
              <a class="btn btn-warning editBtn" href="#">Edit</a>
            </div>
          </div>
          `
        movieExampleSection.innerHTML = el;

        const deleteBtn = document.querySelector('.btn-danger');
        deleteBtn.addEventListener('click', async (e) => {
            const response = await fetch(`http://localhost:3030/data/movies/${movieId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "X-Authorization": sessionStorage.getItem("token"),
                }
            })

            window.location.href='./index.html';
        });

        const editBtn = document.querySelector('.editBtn');

        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const editSection = document.querySelector('#edit-movie');
            hideAllSections();
            editSection.style.display='block';
            const form = document.querySelector('.editMovie');

            const titleField = document.querySelector('form.editMovie input[name="title"]');
            const descriptionField = document.querySelector('form.editMovie textarea[name="description"]');
            const imgField = document.querySelector('form.editMovie input[name="img"]');

            titleField.value = data.title;
            descriptionField.value = data.description;
            imgField.value = data.img;

            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const formData = new FormData(form);
                const title = formData.get('title');
                const description = formData.get('description');
                const img = formData.get('img');
                
                const response = await fetch(`http://localhost:3030/data/movies/${movieId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Authorization": sessionStorage.getItem("token"),
                    },
                    body: JSON.stringify({
                        title,
                        description,
                        img,
                    })
                })
                window.location.href="./index.html";
            })
        })

    } else {
        const el = `
    <div class="container">
          <div class="row bg-light text-dark">
            <h1>Movie title: ${data.title}</h1>

            <div class="col-md-8">
              <img
                class="img-thumbnail"
                src="${data.img}"
                alt="Movie"
              />
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>
                ${data.description}
              </p>
            </div>
          </div>
          `
        movieExampleSection.innerHTML = el;
    }
}

