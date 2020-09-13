import React from 'react';
import { render } from '@testing-library/react';
import { EventDetails } from './EventDetails';
import { BrowserRouter } from 'react-router-dom';

const eventDetails = {
  imageUrl: 'test/imageUrl',
  eventName: 'test name',
  description: 'test description',
  location: 'test location',
  date: 'test date',
  id: 232345,
};

describe('Event details', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <EventDetails eventDetails={eventDetails} />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
