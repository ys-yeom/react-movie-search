import MovieCard from './MovieCard';
import styles from './MovieList.module.css';

export default function MovieList({ movies }) {
  // console.log(movies);
  return (
    <div className={styles.movie_list}>
      {/* 데이터 없을 경우 이므로 가 실행되지않게하고 없을경우 영화데이터없음을 표시 */}
      {movies?.length > 0 ? (
        movies.map((movie) => 
          <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <p>영화 데이터 없음</p>
        )}
    </div>
  );
}
