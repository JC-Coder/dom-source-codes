// DOM EVENTS 

// HTML events are 'things' that happen to HTML elements 
// examples 
// 1. an HTML web page has finished loading 
// 2. An HTML input field was changed
// 3. An HTML button was clicked


// ===== LIST OF COMMON EVENTS IN JS 
/**
 * onchange => An HTML element has been changed 
 * onclick => the user clicks and html element
 * onload => the browser has finished loading 
 * mouseover => the mouse goes over an html object
*/

// onload
// document.onload =  console.log('document loaded');

// // onclick
// let button = document.querySelector('button');
// button.onclick = function(){
//     alert('button clicked');
// }

// // onmouseover 
// button.onmouseover = function(){
//     console.log('mouse passed over me');
// }


// getting information from html form using events 
// let name = document.querySelector('.name');
// let email = document.querySelector('.email');
// let password = document.querySelector('.password');
// let submitBtn = document.querySelector('.submit');
// let getAllUsersBtn = document.querySelector('.show-all');

// let users = [];

// function getDetails(){
//    if(!name.value || !email.value || !password.value){
//     alert('your input cannot be empty');
//    } else {
//     users.push({
//         name: name.value, 
//         email: email.value,
//         password: password.value
//     });
//     alert('input summit successful');
//    }

//     name.value = '';
//     email.value = '';
//     password.value = '';
// }
// submitBtn.addEventListener('click', getDetails);

// function showAllUser(){
//     console.log(users);
// }

// getAllUsersBtn.addEventListener('click', showAllUser);


// working with navbar 

let openNavBtn = document.querySelector('.open-nav');
let closeNavBtn = document.querySelector('.close-nav');
let mobileMenu = document.querySelector('.mobile-menu');


document.onload = closeNavBtn.style.display = 'none';

function openNav() {
    mobileMenu.style.opacity = 1;
    mobileMenu.style.visibility = 'visible';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline';
}

function closeNav(){
    mobileMenu.style.opacity = 0;
    mobileMenu.style.visibility = 'hidden';
    openNavBtn.style.display = 'inline';
    closeNavBtn.style.display = 'none';
}


openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);