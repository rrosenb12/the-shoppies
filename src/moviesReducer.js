const defaultState = {moviesArray: [], nominatedMovies: []}

export default function moviesReducer(state = defaultState, action){
    switch(action.type){
        case 'ADD_MOVIES_TO_MAIN':
            return {...state, moviesArray: action.payload}
        case 'NOMINATE_MOVIE':
            return{
                ...state, nominatedMovies: [...state.nominatedMovies, action.payload]
            }
        case 'REMOVE_MOVIE':
            return{
                ...state, nominatedMovies: [...state.nominatedMovies.filter(movie => movie.Title !== action.payload.Title)]
            }
        default:
            return state
    }
}