
export async function getAllMovies() {
    try {
        const response = await fetch('http://localhost:3030/data/movies');
        const data = await response.json();
        return data;

    } catch (error) {
        throw new Error("Error")
    }

}

export async function createMovie(movieTitle, movieDescription, movieImg) {
    const response = await fetch('http://localhost:3030/data/movies', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": sessionStorage.getItem("token"),
        },
        body: JSON.stringify({
            title: movieTitle,
            description: movieDescription,
            img: movieImg,
        })
    });
}

export async function updateMovie() {
    const response = await fetch('http://localhost:3030/data/movies', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": sessionStorage.getItem("token"),
        }   
    });
}

export async function deleteMovie() {
    const response = await fetch('http://localhost:3030/data/movies', {
        method: "Delete", 
    });
}