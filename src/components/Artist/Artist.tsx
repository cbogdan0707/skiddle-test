import React from 'react';
import { config } from '../../utils/config';
import { useGetEventsOrArtists } from '../../utils/hooks';

export const Artist = ({ match }: { match: { params: { id: string } } }) => {
  const { hasError, response } = useGetEventsOrArtists(
    config.eventArtistsUrl,
    match,
    config.apiKey
  );

  return (
    <div>
      {hasError && <div data-testid="fetch-error">Error: {hasError}</div>}
      {response.results && (
        <>
          <div className="skiddle-u-text-align-center skiddle-u-background-primary">
            <img
              className="skiddle-c-artist-image skiddle-u-mt-large"
              alt="artist logo"
              src={response.results.imageurl}
            />
            <h1 className="skiddle-u-color-white skiddle-u-mv-large">
              {response.results.name}
            </h1>
            <p className="skiddle-c-artist-description">
              {response.results.description}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
