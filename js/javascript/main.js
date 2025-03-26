import { userList } from './db.js';


console.log('Hello JS!');

console.log(userList[0].name);

// Primitive types
const active = true; // boolean
const age = 22; //  number
const userName = 'Mz/x';
const nothing = null;
let price; // undefined

// Collections
const items = [1, 5, ['Hello', true], 'message'];
console.log( items[2][1] );
console.log( items.length );

const settings = {
    url: 'http://localhost:3000',
    devMode: true,
};
console.log( settings.url );
const key = 'devMode';
console.log( settings[key] );

console.log( age.toFixed(1) );

Number.prototype.hello = function() {
    console.log( this );
    console.log('this is the function from the hello method');
};
age.hello();
