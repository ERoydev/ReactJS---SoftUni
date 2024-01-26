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
        li.classList.add('movie-list-item')
        const div = document.createElement('div');

        const p = document.createElement('p');
        const button = document.createElement('button');
        button.textContent = "Details";
        button.classList.add('movie-list-button')

        p.innerHTML = `<strong>${x.title}</strong>`;
        li.innerHTML = `<img src="${x.img}" class="movie-img" />`;
        li.appendChild(p);
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