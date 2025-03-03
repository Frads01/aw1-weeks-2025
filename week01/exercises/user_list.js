"use strict";

const names = " Luigi De Russis, Luca Scibetta, Fulvio Corno, Francesca Russo ";

const nameArray = names.split(",");
for (let i=0; i<nameArray.length; i++) {
    nameArray[i] = nameArray[i].trim();
}

const acronyms = [];

for (let name of nameArray) {
    const words = name.split(" ");
    let acronym = "";
    for (let word of words) {
        acronym += word[0].toUpperCase();
    }
    acronyms.push(acronym);
}

for (let i=0; i<nameArray.length; i++) {
    console.log(`${acronyms[i]} - ${nameArray[i]}`);
}