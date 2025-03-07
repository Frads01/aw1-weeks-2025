// "use strict"; -- Non serve con i moduli ES, attivato di default
// Modulo CommonJS (non standard di JS, ma standard di Node -> Non funziona in browser)
    // const dayjs = require('dayjs');

// Modulo standard JS (ES)
import dayjs from 'dayjs';

console.log(dayjs()); // I mesi iniziano da 0, se stampato singolarmente
console.log(dayjs().format());

