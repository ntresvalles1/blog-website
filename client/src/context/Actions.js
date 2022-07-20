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