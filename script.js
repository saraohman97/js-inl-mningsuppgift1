const form = document.querySelector('#regForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');

const validateText = (input) => {
    if(input.value.trim() === '') {
        setError(input, 'Name can\`t be emty')
        return false;
    }
    else if(input.value.trim().length < 2) {
        setError(input, 'Name must be atleast 2 chars long')
        return false;
    }
    else {
        setSuccess(input)
        return true;
    }
}

const validateEmail = email => {
    
}