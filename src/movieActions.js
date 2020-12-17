export const addMoviesToMainContainer = (moviesArray) => {
    return{
        type: 'ADD_MOVIES_TO_MAIN',
        payload: moviesArray
    }
}

export const nominateMovie = (movie) => {
    return{
        type: 'NOMINATE_MOVIE',
        payload: movie
    }
}

export const removeMovie = (movie) => {
    return{
        type: 'REMOVE_MOVIE',
        payload: movie
    }
}