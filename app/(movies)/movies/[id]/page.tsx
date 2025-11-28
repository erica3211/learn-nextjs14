import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/move-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
    params: Promise<{
        id: string
    }>;
}

export async function generateMetaData({ params }: IParams) {
    const { id } = await params;
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

// Next.js 15부터는 동적 라우트 페이지의 params가 정말로 Promise 로 전달됨.
export default async function MovieDetail({ params }: IParams) {
    const { id } = await params;
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}