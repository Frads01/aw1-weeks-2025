"use strict";

const movie = {
    title: "Forrest Gump",
    genre: "Drama",
    duration: 142,
};

/** Si può usare anche la function Movie(...){...} che è la stessa cosa, ma per familiarità si usa class + constructor */
class Movie {
    constructor(title, genre, duration) {
        this.title = title;
        this.genre = genre;
        this.duration = duration;
        this.isLong = () => this.duration > 120; //arrow function con return implicito e senza parametri
    }
}

let forrest = new Movie("Forrest Gump", "Drama", 142);
console.log(forrest.isLong());