import React from 'react';
import { render } from '@testing-library/react';
import { Event } from './Event';

describe('Event', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Event match={{ params: { id: '2333333' } }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
