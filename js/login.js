/* step 1: add click event handler with the submit button */
document.getElementById('submit-btn').addEventListener('click', function () {
    /* step 2: get the email address inside the email input field */
    /* always remember to use .value to get text from an input field */
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    /* step 3: get tha password */
    /* 3.a: set id on the html element */
    /* 3.b: get the element and value form tha element */
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    /* DANGER!!! DO NOT verify email password on the client side */
    /* step 4: verify email and password and check whether valid user or not */
    if (email === 'sontan@baap.com' && password === 'secret') {
        console.log('valid user');
    } 
    else {
        console.log('invalid user');
    }
});