import React, { ReactElement } from 'react';
import Loader from 'react-loader-spinner';
import { FetchEvents } from '../../types/types';

export const SearchField = ({
  inputText,
  setInputText,
  searchResults,
}: FetchEvents): ReactElement => {
  return (
    <div className="skiddle-u-pb-large skiddle-c-search">
      <input
        data-testid="search-input"
        className="skiddle-c-search-input"
        name="searchEvents"
        value={inputText}
        placeholder="search for events"
        onChange={(e) => setInputText(e.target.value)}
      />
      {searchResults.loading && (
        <span className="skiddle-c-loading-spinner-container">
          <Loader
            type="Oval"
            color="rgb(70, 195, 190)"
            height={24}
            width={24}
          />
        </span>
      )}
    </div>
  );
};
