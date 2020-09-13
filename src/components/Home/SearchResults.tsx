import React, { ReactElement } from 'react';
import { EventDetails } from './EventDetails';
import { RawEventsResults } from '../../types/types';

export const SearchResults = ({
  searchResults,
}: {
  searchResults: {
    error: number;
    errormessage: string;
    result: { results: Array<RawEventsResults> };
  };
}): ReactElement => {
  return (
    <>
      {searchResults.error && (
        <div data-testid="fetch-error">Error: {searchResults.errormessage}</div>
      )}
      {searchResults.result &&
        searchResults.result.results &&
        searchResults.result.results.length !== 0 && (
          <section className="skiddle-c-search-results skiddle-u-pt-large">
            <ul className="skiddle-c-search-results-container">
              {searchResults.result.results.map((event: RawEventsResults) => (
                <li key={event.id}>
                  {
                    <EventDetails
                      eventDetails={{
                        id: event.id,
                        imageUrl: event.largeimageurl,
                        eventName: event.eventname,
                        description: event.description,
                        location: event.venue.address,
                        date: event.date,
                      }}
                    />
                  }
                </li>
              ))}
            </ul>
          </section>
        )}
    </>
  );
};
