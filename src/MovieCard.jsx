export default function MovieCard({ movie, onToggle }) {
  let status
  if (movie.watched) {
    status = 'Watched'
  } else {
    status = 'Not watched yet'
  }

  let buttonLabel
  if (movie.watched) {
    buttonLabel = 'Mark as Unwatched'
  } else {
    buttonLabel = 'Mark as Watched'
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.genre} · {movie.year}</p>
      <p>{status}</p>
      <button onClick={() => onToggle(movie.id)}>{buttonLabel}</button>
    </div>
  )
}