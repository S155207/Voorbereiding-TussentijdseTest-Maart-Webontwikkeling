import data from "./movie.json"

interface Movie {
    title: string,
    year: number,
    actors: string[],
    metascore: number,
    seen: boolean
};

const movie: Movie[] = data;
const titles: string[] = ["Movie from file:", "My favorite movie:", "My worst movie:"]

for (let i = 0; i < titles.length; i++) {
    console.log(titles[i]);
    console.log(`${movie[i].title} (${movie[i].year})`);
    console.log(`Actors: ${movie[i].actors[0]}, ${movie[i].actors[1]}, ${movie[i].actors[2]}`);
    console.log(`Metascore: ${movie[i].metascore}`);
    console.log(movie[i].seen ? "YES" : "NO");
    console.log();
};

const wasMadeInThe90s = function (movie: Movie) {
    return movie.year >= 1990 && movie.year <= 1999;
};
console.log(wasMadeInThe90s(movie[0]));

const averageMetaScore = function (movies: Movie[]) {
    return movies.map(movie => movie.metascore).reduce((sum, num) => sum + num, 0) / movies.length;
};
console.log(averageMetaScore(movie));

const fakeMetaScore = function (movie: Movie, newScore: number) {
    movie.metascore = newScore;
    return movie;
};
console.log(fakeMetaScore(movie[2], 10));