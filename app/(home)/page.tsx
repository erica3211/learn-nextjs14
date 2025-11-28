import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

// metadata 는 합쳐짐 (merge)
export const metadata = {
    title: "Home",
};
// https://nomad-movies.nomadcoders.workers.dev/
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    console.log("I'm fetching");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL, { cache: "force-cache", next: { revalidate: false } });
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                />
            ))}
        </div>
    )
}