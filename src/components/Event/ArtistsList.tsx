import React from 'react';
import { Link } from 'react-router-dom';
import { ArtistsData, EventData } from '../../types/types';

export const ArtistsList = ({
  response,
}: {
  response: { results: EventData };
}) => {
  return (
    <section>
      {response.results.artists && response.results.artists.length !== 0 && (
        <div className="skiddle-u-color-primary skiddle-u-mb-medium skiddle-c-artist-title">
          List of artists:
        </div>
      )}
      <ul className="skiddle-c-artist-results-container">
        {response.results.artists &&
          response.results.artists.map((artist: ArtistsData) => (
            <li key={artist.artistid}>
              <Link
                className="skiddle-u-primary-button skiddle-u-pa-small"
                to={{ pathname: `/artist/${artist.artistid}` }}
              >
                {artist.name}
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
};
