import React from 'react';
import { render } from '@testing-library/react';
import { Artist } from './Artist';
import * as hooks from '../../utils/hooks';

describe('Artist details', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Artist match={{ params: { id: '2333333' } }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should display error message if fetch failes', () => {
    //@ts-ignore
    jest.spyOn(hooks, 'useGetEventsOrArtists').mockImplementation(() => {
      return {
        hasError: true,
        response: null,
      };
    });
    const { queryByTestId } = render(
      <Artist match={{ params: { id: '2333333' } }} />
    );
    expect(queryByTestId('fetch-error')?.innerHTML).toEqual(
      'Error: failed to fetch artists'
    );
  });
});
