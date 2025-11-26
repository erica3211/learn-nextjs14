export default async function MovieDetail({params}: {params: Promise<{ id: string }>
}) {
    const {id} = await params;
    // 영화 API 
    // https://nomad-movies.nomadcoders.workers.dev/
    return (
        <div>
            <h1>Movie {id}</h1>
        </div>
    )
}