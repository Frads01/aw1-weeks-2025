/* Strange JS behaviors and where to find (some of) them */
'use strict';

const type = typeof NaN;
<<<<<<< Updated upstream
console.log('NaN is a ' + type); // number
console.log(`NaN === NaN? ${NaN === NaN}\n`); // true -> false

console.log(`NaN == NaN? ${NaN == NaN}`); // true -> false
console.log(`null == undefined? ${null == undefined}\n`); // true

console.log(`null == false? ${null == false}`); // true -> false
console.log(`'' == false? ${'' == false}`); // true
console.log(`3 == true? ${3 == true}`); // true -> false
console.log(`0 == -0? ${0 == -0}\n`); // true

console.log(`true + true = ${true + true}`); // ??? 2 -> 2
console.log(`true !== 1? ${true !== 1}\n`); // true

console.log(`5 + '10' = ${5 + '10'}`); // 510
console.log(`'5' - 1 = ${'5' - 1}\n`); // 4

console.log(`1 < 2 < 3? ${1 < 2 < 3}`); // true
console.log(`3 > 2 > 1? ${3 > 2 > 1}\n`); // ??? false -> false

console.log(`0.2 + 0.1 === 0.3? ${0.2 + 0.1 === 0.3}\n`); // ??? false -> false

console.log('b' + 'a' + (+ 'a') + 'a'); // baNaNaconsole.log('b' + 'a' + (+ 'a') + 'a'); // baNaNa
console.log('b' + 'a' + (+ 'a') + 'a'); // baNaNa
=======
console.log('NaN is a ' + type); // number 
console.log(`NaN === NaN? ${NaN === NaN}\n`); // false (NaN non è uguale a niente, neanche a se stesso)

console.log(`NaN == NaN? ${NaN == NaN}`); // false (NaN non è uguale a niente, neanche a se stesso)
console.log(`null == undefined? ${null == undefined}\n`); // true

console.log(`null == false? ${null == false}`); // false (sarebbe null == 0 con la conversione)
console.log(`'' == false? ${'' == false}`); // true
console.log(`3 == true? ${3 == true}`); // false (sarebbe 3 == 1 con la conversione)
console.log(`0 == -0? ${0 == -0}\n`); // true

console.log(`true + true = ${true + true}`); // 2 (sarebbe 1 + 1 con la conversione)
console.log(`true !== 1? ${true !== 1}\n`); // true (non c'è conversione, quindi sono diversi)

console.log(`5 + '10' = ${5 + '10'}`); // 510 (numero + stringa = stringa)
console.log(`'5' - 1 = ${'5' - 1}\n`); // 4 (stringa - numero = numero)

console.log(`1 < 2 < 3? ${1 < 2 < 3}`); // true (1<2=true, true=1<3 = true)
console.log(`3 > 2 > 1? ${3 > 2 > 1}\n`); // false (3>2=true, true=1>1 = false)

console.log(`0.2 + 0.1 === 0.3? ${0.2 + 0.1 === 0.3}\n`); // false

console.log('b' + 'a' + (+ 'a') + 'a'); // baNaNa (+ converte qualcosa in numero, però 'a' non può essere convertito in numero)
>>>>>>> Stashed changes
