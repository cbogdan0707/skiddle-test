import React from 'react';
import { render } from '@testing-library/react';
import { SearchResults } from './SearchResults';
import { BrowserRouter } from 'react-router-dom';

const result = {
  error: 0,
  errormessage: '',
  result: {
    results: [
      {
        id: 23232,
        largeimageurl: 'image1',
        eventname: 'event1',
        description: 'description1',
        venue: { address: 'location1' },
        date: 'date1',
      },
      {
        id: 323243,
        largeimageurl: 'image2',
        eventname: 'event2',
        description: 'description2',
        venue: { address: 'location2' },
        date: 'date2',
      },
    ],
  },
};

describe('Event details', () => {
  it('should match snapshot when results are available', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <SearchResults searchResults={result} />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should display an error message when fetch fails', () => {
    const { queryByTestId } = render(
      <BrowserRouter>
        <SearchResults
          searchResults={{
            error: 1,
            result: { results: [] },
            errormessage: 'failed to fetch',
          }}
        />
      </BrowserRouter>
    );
    expect(queryByTestId('fetch-error')?.innerHTML).toEqual(
      'Error: failed to fetch'
    );
  });
});
