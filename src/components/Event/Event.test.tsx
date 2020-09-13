import React from 'react';
import { render } from '@testing-library/react';
import { Event } from './Event';
import * as hooks from '../../utils/hooks';

describe('Event', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Event match={{ params: { id: '2333333' } }} />
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
      <Event match={{ params: { id: '2333333' } }} />
    );
    expect(queryByTestId('fetch-error')?.innerHTML).toEqual(
      'Error: failed to fetch events'
    );
  });
});
