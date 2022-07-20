export const SigninStart = (userCredentials) => ({
    type: "SIGNIN_START",
});

export const SigninSuccess = (user) => ({
    type: "SIGNIN_SUCCESS",
    payload: user,
});

export const SigninFailure = () => ({
    type: "SIGNIN_FAILURE",
});

export const Signout = () => ({
    type: "SIGNOUT",
});

export const UpdateStart = (userCredentials) => ({
    type: "UPDATE_START",
});

export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user,
});

export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE",
});