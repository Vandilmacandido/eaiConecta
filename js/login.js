
const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPasswordButton: () => document.getElementById("recover-password-button"),
}
function login() {
    
    firebase.auth().signInWithEmailAndPassword(
        form.email().value , form.password().value
        ).then(response => {
            window.location.href = "./parceiropages.html";
    }).catch(error => {
        console.log('error', error)
    });
    
    //window.location.href = "parceiropages.html";
}
