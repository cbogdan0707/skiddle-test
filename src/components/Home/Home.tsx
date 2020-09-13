import React, { ReactElement } from 'react';
import { SearchResults } from './SearchResults';
import { SearchField } from './SearchField';
import { useDebouncedSearch } from '../../utils/hooks';
import { fetchEvents } from '../../utils/fetchData';
import { EventsResponse } from '../../types/types';

const useSearchEvents = () =>
  useDebouncedSearch(
    (text: string): Promise<EventsResponse> => fetchEvents(text)
  );

export const Home = (): ReactElement => {
  const { inputText, setInputText, searchResults } = useSearchEvents();

  return (
    <div className="App">
      <header className="skiddle-u-background-primary">
        <img
          className="skiddle-c-logo"
          alt="skiddle logo"
          src="https://s3-eu-west-1.amazonaws.com/skiddlecdn-general/assets/logo/png/skiddle-logo-white-landscape.png"
        />
        <SearchField
          inputText={inputText}
          setInputText={setInputText}
          searchResults={searchResults}
        />
      </header>
      <SearchResults searchResults={searchResults} />
    </div>
  );
};
