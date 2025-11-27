import Link from "next/link";

// metadata 는 합쳐짐 (merge)
export const metadata = {
    title: "Home",
};
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
        <div>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </div>
    )
}