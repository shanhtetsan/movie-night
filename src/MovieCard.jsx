export default function MovieCard({ movie }) {
  let status
  if (movie.watched) {
    status = 'Watched'
  } else {
    status = 'Not watched yet'
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.genre} · {movie.year}</p>
      <p>{status}</p>
    </div>
  )
}