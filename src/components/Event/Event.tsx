import React, { ReactElement } from 'react';
import { config } from '../../utils/config';
import { ArtistsList } from './ArtistsList';
import { useGetEventsOrArtists } from '../../utils/hooks';

export const Event = ({
  match,
}: {
  match: { params: { id: string } };
}): ReactElement => {
  const { hasError, response } = useGetEventsOrArtists(
    config.eventDetailsUrl,
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
              className="skiddle-u-mt-large"
              alt="event logo"
              src={response.results.largeimageurl}
            />
            <h1 className="skiddle-u-color-white skiddle-u-pb-large">
              {response.results.eventname}
            </h1>
          </div>
          <ArtistsList response={response} />
        </>
      )}
    </div>
  );
};
