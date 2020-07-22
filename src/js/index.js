import '../scss/main.scss';
import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')
const name = "Kotek";
const age = 1.5;

console.log(name);
console.log(age);
/* const message = document.querySelector('.hidden-one__header');
message.innerHTML = "Łajby są super!!!";
*/

function greet(age, name) {
    console.log(`Kotek ${name} tak. I ma ${age} latek.`);

}

const newGreet = (age, name) => {
    console.log(`Kotek ${name} tak. I ma ${age} latek.`);
}

greet(age, name);
newGreet(age, name);

const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})

console.log(moment().startOf('day').fromNow());