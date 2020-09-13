import React from 'react';
import { render } from '@testing-library/react';
import { Artist } from './Artist';

describe('Artist details', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Artist match={{ params: { id: 2333333 } }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
