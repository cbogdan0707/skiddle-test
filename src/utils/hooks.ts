import { useState, useEffect } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import useConstant from 'use-constant';
import { useAsync } from 'react-async-hook';
import { EventsResponse, EventData } from '../types/types';

export const useDebouncedSearch = (
  searchFunction: (text: string) => Promise<EventsResponse>
): {
  inputText: string;
  setInputText: (inputText: string) => void;
  searchResults: any;
} => {
  const [inputText, setInputText] = useState('');

  const debouncedSearchFunction = useConstant(() =>
    AwesomeDebouncePromise(searchFunction, 300)
  );

  const searchResults = useAsync(async () => {
    if (inputText.length === 0) {
      return [];
    } else {
      return debouncedSearchFunction(inputText);
    }
  }, [debouncedSearchFunction, inputText]);

  return {
    inputText,
    setInputText,
    searchResults,
  };
};

export const useGetEventsOrArtists = (
  domain: string,
  match: { params: { id: string } },
  apiKey: string
): {
  response: { results: EventData };
  hasError: boolean;
} => {
  const url = `${domain}/${match.params.id}?api_key=${apiKey}`;

  const [hasError, setErrors] = useState(false);
  const [response, setResponse] = useState({
    results: {},
  });

  async function fetchEventDetails() {
    const rawResponse = await fetch(url);
    rawResponse
      .json()
      .then((res) => setResponse(res))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchEventDetails();
  }, []);

  return {
    hasError,
    response,
  };
};
