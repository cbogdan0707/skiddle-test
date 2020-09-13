import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface EventProps {
  imageUrl: string;
  eventName: string;
  description: string;
  location: string;
  date: string;
  id: number;
}

export const EventDetails = ({
  eventDetails,
}: {
  eventDetails: EventProps;
}): ReactElement => {
  return (
    <div className="skiddle-c-event-details">
      <img alt="event" src={eventDetails.imageUrl} />
      <div className="skiddle-u-text-align-center skiddle-u-bold skiddle-u-mt-small">
        {eventDetails.eventName}
      </div>
      <div className="skiddle-u-mt-small">{eventDetails.description}</div>
      <div className="skiddle-u-mt-small skiddle-c-location">
        {eventDetails.location}
      </div>
      <div className="skiddle-u-mt-small skiddle-c-date">
        {eventDetails.date}
      </div>
      <div className="skiddle-u-text-align-center skiddle-u-mt-medium">
        <Link
          className="skiddle-u-primary-button skiddle-u-pa-small"
          to={{ pathname: `/event/${eventDetails.id}` }}
        >
          view details
        </Link>
      </div>
    </div>
  );
};
