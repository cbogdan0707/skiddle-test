import { config } from './config';
import { EventsResponse } from '../types/types';

export const fetchEvents = async (keyword: string): Promise<EventsResponse> => {
  const url = `${config.eventsUrl}?api_key=${config.apiKey}&keyword=${keyword}`;

  const rawResponse = await fetch(url);
  const response = await rawResponse.json();
  return response;
};
