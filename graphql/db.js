let movies = [
    {
        id:0,
        name : "Avengers - The new one",
        score:8
    },
    {
        id:1,
        name : "Ther Godfather I",
        score:99
    },
    {
        id:2,
        name : "Logan",
        score:2
    },
    {
        id:3,
        name : "Devine Move",
        score:82
    },
    {
        id:4,
        name : "신과함께 - 죄와벌",
        score:99
    }

]

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id)
    return filteredMovies[0]
}

export const getMovies = () => movies;

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== String(id))
    if (movies.length > cleanedMovies.length) {
        movie = cleanedMovies
        return True
    }
    else {
        return False
    }
}