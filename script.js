import User from './models/UserModel.js'

const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const output = document.querySelector('#output');

let users = [];

// Validate text and email
const validateText = (id) => {
  let input = document.querySelector(id);
  
  if(input.value === '' || input.value.length < 2) {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    input.focus();
    return false;
  }
  else {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    return true;
  }
}

const validateEmail = (emailInput) => {
  let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if(regEx.test(emailInput.value)) {
    emailInput.classList.remove('is-invalid');
    emailInput.classList.add('is-valid');
    return true;
  }
  else {
    emailInput.classList.remove('is-valid');
    emailInput.classList.add('is-invalid');
    emailInput.focus();
    return false;
  }
}

email.addEventListener('keyup', () => {
  const list = [...email.classList]
  if(list.includes('is-invalid')) {
    validateEmail(email)
  }
})
  
  
  

// Add output
const createUser = (firstName, lastName, email) => {
    const user = new User(firstName, lastName, email);
    users.push(user);
    console.log(users);
    output.insertAdjacentHTML('beforeend', newUser(user))
}


const newUser = user => {
  return `
  <div id="${user.id}" class="card text-center p-3 mb-3"> 
      <h3>${user.firstName} ${user.lastName}</h3>
      <small>${user.email}</small>
  </div> `
}


output.addEventListener('click', e => {
  console.log(e.target.parentNode.id);
  users = users.filter(user => user.id !== e.target.parentNode.id)
  console.log(users);
  e.target.parentNode.remove()
})


form.addEventListener('submit', e => {
  e.preventDefault();
  
  if(firstName.value.trim() !== '' && lastName.value.trim() !== '' && email.value.trim() !== '') {
    createUser(firstName.value, lastName.value, email.value)
    form.reset()
  }
  

  const errors = [];
  
  for(let i = 0; i < e.currentTarget.length; i++ ) {
    if(e.currentTarget[i].type === "text") {
      errors[i] = validateText('#' + e.currentTarget[i].id);
    }
    else if(e.currentTarget[i].type === "email") {
      errors[i] = validateEmail(email);
    }
  }
  
  console.log(errors)
  
  if(errors.includes(false)) {
    console.log('inte bra')
  }
  else {
    console.log('allt är super bra')
  }
  
})