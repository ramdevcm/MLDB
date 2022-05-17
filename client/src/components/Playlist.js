import React from 'react';
import PlaylistCard from './PlaylistCard';

function Playlist({ movies, videos }) {
	return (
		<div id="movies">
			<h2 className="movies__header">🎬 Movies</h2>
			<div className="movies__container">
				{ movies.length > 0 && movies.map(movie => {
					return (
						<div key={movie.id}>
							<PlaylistCard { ...movie } { ...videos } />
						</div>
					);
				})}
			</div>
		</div>
	)
}

export default Playlist;