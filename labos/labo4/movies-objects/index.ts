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