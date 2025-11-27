import { API_URL } from "../../../(home)/page"

async function getMovie(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function getVideos(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

// Next.js 15부터는 동적 라우트 페이지의 params가 정말로 Promise 로 전달됨.
export default async function MovieDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    // 병렬로 실행
    const [movie, video] = await Promise.all([getMovie(id), getVideos(id)]);
    // 영화 API 
    // https://nomad-movies.nomadcoders.workers.dev/
    return (
        <h1>{movie.title}</h1>
    )
}