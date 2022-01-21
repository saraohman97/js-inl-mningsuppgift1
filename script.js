//Global hämtning, skulle kunna sparas i form. dvs lokal hämtning
const form = document.querySelector('#regForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');

//Message på valideringsfel
const validateText = (input) => {
    if(input.value.trim() === '') {
        setError(input, 'Name\'t be empty');
        return false;
    }
    else if(input.value.trim().length < 2) {
        setError(input, 'Name must be atleast 2 chars long');
        return false;
    }
    else {
        setSuccess(input)
        return true;
    }
}
const validateEmail = email => {
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(email.value.trim() === ''){
        setError(email, 'You need to enter a email address');
        return false;
    }
    else if(!regEx.test(email.value)){
        setError(email, 'Email address is not valid');
        return false;
    }
    else{
        setSuccess(email)
        return true;
    }
}

//Synlighet på valideringsfel
const setError = (input, textMessage) => {
    const parent = input.parentElement;

    input.parentElement.classList.add('is-invalid');
    input.parentElement.classList.remove('is-valid');

    parent.querySelector('.invalid-input').innerText = textMessage;
}
const setSuccess = input => {
    const parent = input.parentElement;

    input.parentElement.classList.remove('is-invalid');
    input.parentElement.classList.add('is-valid');
}

//Loop
const validate = input => {
    switch(input.type) {
        case 'text': return validateText(input)
        case 'email': return validateEmail(input)
        default:
            break;
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();

    errors = []

    for(let i = 0; i < form.length; i++){
        errors[i] = validate(form[i])
        //28.30 min, lektion7-del2
    }
    console.log(errors)

    if(!errors.includes(false)) {
        const user = {
            id : Date.now().toString(),
            firstName : firstName.value, 
            lastName : lastName.value, 
            email : email.value
        }
        console.log(user);
    }
})


