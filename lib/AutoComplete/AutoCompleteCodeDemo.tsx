import Demo from '../../demo';
import * as React from 'react';
const code = `
// Basic

const cities = ['Beijing', 'Shanghai', 'Tokyo', 'London', 'NewYork'];
const handleFetchCities = (query: string) => {
  return cities
         .filter(name => name.toUpperCase()?.includes(query?.toUpperCase()))
         .map(name => ({ value: name }));
};

<AutoComplete
  fetchSuggestions={handleFetchCities}
  onSelect={value => {
    console.log(value);
  }}
  placeholder="try to type 'b'"
/>

// Customized

const handleFecthCityAndCountries = (query: string) => {
  return countryAndCityNames.filter(item =>
    item.value?.toUpperCase().includes(query?.toUpperCase()),
  );
};
const renderOption = (
  item: DataSourceType<{ country: string; city: string }>,
) => {
  const countryAndCity = item;
  return (
    <>
      <b> {countryAndCity?.country}</b>
      <span style={{ marginLeft: 30 }}>{countryAndCity?.city}</span>
    </>
  );
};

<AutoComplete
  fetchSuggestions={handleFecthCityAndCountries}
  onSelect={value => {
    console.log(value);
  }}
  placeholder="try to type 's'"
  renderOption={renderOption}
/>

// fetch suggestions from remote

const handleFetchUsersFromGithub = (query: string) => {
  return fetch('https://api.github.com/search/users?q=' + query)
    .then(res => res.json())
    .then(({ items }) => {
      return items
        ?.slice(0, 10)
        .map((item: any) => ({ value: item.login, ...item }));
    });
};

<AutoComplete
  style={{width:200}}
  fetchSuggestions={handleFetchUsersFromGithub}
  placeholder="input username of github"
  onSelect={value => {
    console.log(value);
  }}
/>
`;
export const AutoCompleteCodeDemo = () => {
  return <Demo code={code}></Demo>;
};