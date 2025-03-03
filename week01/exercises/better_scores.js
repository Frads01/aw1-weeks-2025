"use strict";

const scores = [-20, -5, -1, 100, -3, 30, 50, 10];
const betterScores = [];
let NN = 0;

for (let score of scores) {
    if (score >= 0) {
        betterScores.push(score);
    }
}

NN = scores.length - betterScores.length;

// Versione con Math.min() e .splice()
/* let minScore = Math.min(...betterScores);
let index = betterScores.indexOf(minScore);
betterScores.splice(index, 1);

minScore = Math.min(...betterScores);
index = betterScores.indexOf(minScore);
betterScores.splice(index, 1); */

// Versione con .sort()
/** It should return a number where:

    A negative value indicates that a should come before b.
    A positive value indicates that a should come after b.
    Zero or NaN indicates that a and b are considered equal.

To memorize this, remember that (a, b) => a - b sorts numbers in ascending order. */

betterScores.sort((a, b) => a - b);
betterScores.shift();
betterScores.shift();

let avg = 0;
for (let score of betterScores) {
    avg += score;
}
avg /= betterScores.length;
avg = Math.round(avg);

for (let i=0; i<NN+2; i++) {
    betterScores.push(avg);
}

console.log(scores)
console.log(betterScores);