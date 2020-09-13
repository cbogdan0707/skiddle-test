import React from 'react';
import { render } from '@testing-library/react';
import { ArtistsList } from './ArtistsList';
import { BrowserRouter } from 'react-router-dom';

const mockResponse = {
  results: {
    artists: [
      {
        artistid: 123540290,
        name: 'Palms Trax',
        image:
          'https://i.scdn.co/image/ab67616d0000b273c22e0b4198f2f563566708ff',
      },
      {
        artistid: 123551074,
        name: 'High Hoops DJs',
        image:
          'https://i.scdn.co/image/ba6a30eefb09cbae4e1d9c253d0fe0afef5ba954',
      },
    ],
  },
};

describe('Artist List', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ArtistsList response={mockResponse} />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
