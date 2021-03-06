import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchField } from './SearchField';

const searchField = {
  inputText: 'man',
  setInputText: jest.fn(),
  searchResults: { loading: true, results: [] },
};

describe('searchFiels', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <SearchField
        inputText={searchField.inputText}
        setInputText={searchField.setInputText}
        searchResults={searchField.searchResults}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have input value same as input Text', () => {
    const { queryByTestId } = render(
      <SearchField
        inputText={searchField.inputText}
        setInputText={searchField.setInputText}
        searchResults={searchField.searchResults}
      />
    );

    const searchInput = queryByTestId('search-input');
    //@ts-ignore
    expect(searchInput.value).toEqual(searchField.inputText);
  });
  it('should change input value on change', () => {
    const { queryByTestId } = render(
      <SearchField
        inputText={searchField.inputText}
        setInputText={searchField.setInputText}
        searchResults={searchField.searchResults}
      />
    );

    const searchInput = queryByTestId('search-input');
    //@ts-ignore
    fireEvent.change(searchInput, { target: { value: 'test' } });
    //@ts-ignore
    expect(searchInput.value).toEqual('man');
  });
});
