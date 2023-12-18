export const loginStart = () =>({
    type: "LOGIN_START",
});

export const loginSuccess = (user) =>({
    payload:user,
    type: "LOGIN_SUCCESS",
});

export const loginFailure = () =>({
    type: "LOGIN_FAILURE",
});

//logout

export const logout = () =>({
    type: "LOGOUT",
});

