import React from 'react';
import { render } from '@testing-library/react';
import { ArtistsList } from './ArtistsList';
import { BrowserRouter } from 'react-router-dom';

const mockResponse = {
  results: {
    artists: [
      {
        artistid: '123540290',
        name: 'Palms Trax',
        image:
          'https://i.scdn.co/image/ab67616d0000b273c22e0b4198f2f563566708ff',
        spotifymp3url:
          'https://p.scdn.co/mp3-preview/8d034129b8c4a7029bafc000a268a1d070ba60ac',
        spotifyartisturl: 'spotify:artist:52XSRQqTAfZ8ZrIqkQvQyA',
      },
      {
        artistid: '123551074',
        name: 'High Hoops DJs',
        image:
          'https://i.scdn.co/image/ba6a30eefb09cbae4e1d9c253d0fe0afef5ba954',
        spotifymp3url:
          'https://p.scdn.co/mp3-preview/2c31e3f193159e589f236ba17b8949daeba2072d',
        spotifyartisturl: 'spotify:artist:4awgEb2pQYbDOC6OFuPy9x',
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
