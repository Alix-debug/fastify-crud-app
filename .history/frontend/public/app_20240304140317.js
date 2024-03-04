// Sign up
async function signUp() {
    const firstName = getValue('sign-up-first-name');
    const email = getValue('sign-up-email');
    const lastName = getValue('sign-up-last-name');
    const password = getValue('sign-up-password');
    const confirmedPassword = getValue('sign-up-confirmed-password');
    
    // 1- check if confirmedPassword === password
    if (password === confirmedPassword) {
        try {

        } catch (e) {
            alert(e.message)
        }
    }
    // 2- check that email not already in Database 

}
// Sign In

// Sign out

// Change My Password

// Forgot My Password

// Delete My Account
