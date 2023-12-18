export const getMoviesStart = () =>({
    type: "GET_MOVIES_START",
});

export const getMoviesSuccess = (movies) =>({
    payload:movies,
    type: "GET_MOVIES_SUCCESS",
});

export const getMoviesFailure = () =>({
    type: "GET_MOVIES_FAILURE",
});

export const deleteMovieStart = () =>({
    type: "DELETE_MOVIE_START",
});

export const deleteMovieSuccess = (id) =>({
    payload:id,
    type: "DELETE_MOVIE_SUCCESS",
});

export const deleteMovieFailure = () =>({
    type: "DELETE_MOVIE_FAILURE",
});

export const createMovieStart = () =>({
    type: "CREATE_MOVIES_START",
});

export const createMovieSuccess = (movie) =>({
    payload:movie,
    type: "CREATE_MOVIES_SUCCESS",
});

export const createMovieFailure = () =>({
    type: "CREATE_MOVIES_FAILURE",
});

export const updateMovieStart = () =>({
    type: "UPDATE_MOVIES_START",
});

export const updateMovieSuccess = (movie) =>({
    payload:movie,
    type: "UPDATE_MOVIES_SUCCESS",
});

export const updateMovieFailure = () =>({
    type: "UPDATE_MOVIES_FAILURE",
});