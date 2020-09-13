export interface EventsResponse {
  error: number;
  pageCount: number;
  results: Array<EventsResults>;
}

interface EventsResults {
  id: number;
  eventname: string;
  largeimageurl: string;
  description: string;
  location: string;
  date: string;
}

export interface RawEventsResults {
  id: number;
  eventname: string;
  largeimageurl: string;
  description: string;
  venue: { address: string };
  date: string;
}

export interface FetchEvents {
  inputText: string;
  setInputText(text: string): void;
  searchResults: SearchResult;
}

export interface SearchResult {
  loading: boolean;
  results: Array<EventsResults>;
}

export interface EventData {
  largeimageurl?: string;
  eventname?: string;
  artists?: Array<ArtistsData>;
  imageurl?: string;
  name?: string;
  description?: string;
}

export interface ArtistsData {
  artistid: number;
  name: string;
}
