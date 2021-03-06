import * as React from 'react';
import {
  ContentCard,
  ContentWrapper,
  Description,
  MainTitle,
  SubTitle,
} from '../helpers/CommonElements';
import AutoComplete from './AutoComplete';
import { DataSourceType } from './AutoComplete';
import { AutoCompleteCodeDemo } from './AutoCompleteCodeDemo';
import { DocTable } from '../DocTable';

const PropertiesColumns = ['Name', 'Type', 'Description', 'Default'];
const PropertitesData = [
  {
    Name: 'value',
    Type: `string`,
    Description:
      'Selected option',
    Default: '',
  },
  {
    Name: 'fetchSuggestions',
    Type: '(str: string) => DataSourceType[] | Promise<DataSourceType[]>',
    Description: 'An array of suggestions to display.',
    Default: '',
  },
  {
    Name: 'onChange',
    Type: '(value:boolean)=>void',
    Description: 'Callback to invoke on value change.',
    Default: '()=>void',
  },
  {
    Name: 'renderOption',
    Type: 'ReactElement',
    Description: 'dropdown options',
    Default: '',
  }
];
export const AutoCompleteExample = () => {
  const cities = ['Beijing', 'Shanghai', 'Tokyo', 'London', 'NewYork'];
  const handleFetchCities = (query: string) => {
    return cities
      .filter(name => name.toUpperCase()?.includes(query?.toUpperCase()))
      .map(name => ({ value: name }));
  };
  const countryAndCityNames: DataSourceType<{
    country: string;
    city: string;
  }>[] = [
    {
      country: 'China',
      city: 'Shanghai',
      value: 'China-Shanghai',
    },
    {
      country: 'UK',
      city: 'London',
      value: 'UK-London',
    },
    {
      country: 'United States',
      city: 'NewYork',
      value: 'United States-NewYork',
    },
    {
      country: 'Japan',
      city: 'Tokyo',
      value: 'Japan-Tokyo',
    },
  ];
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

  const handleFetchUsersFromGithub = (query: string) => {
    return fetch('https://api.github.com/search/users?q=' + query)
      .then(res => res.json())
      .then(({ items }) => {
        return items
          ?.slice(0, 10)
          .map((item: any) => ({ value: item.login, ...item }));
      });
  };
  return (
    <ContentWrapper>
      <MainTitle>AutoComplete</MainTitle>
      <Description>
        AutoComplete is an input component that provides real-time suggestions
        when being typed.
      </Description>
      <ContentCard>
        <SubTitle>Basic</SubTitle>
        <AutoComplete
          fetchSuggestions={handleFetchCities}
          onSelect={value => {
            console.log(value);
          }}
          placeholder="try to type 'b'"
        />
        <SubTitle>Customized </SubTitle>
        <AutoComplete
          fetchSuggestions={handleFecthCityAndCountries}
          onSelect={value => {
            console.log(value);
          }}
          placeholder="try to type 's'"
          renderOption={renderOption}
        />
        <SubTitle>Remote</SubTitle>
        <AutoComplete
          style={{width:200}}
          fetchSuggestions={handleFetchUsersFromGithub}
          placeholder="input username of github"
          onSelect={value => {
            console.log(value);
          }}
        />
      </ContentCard>
      <AutoCompleteCodeDemo/>
      <SubTitle>Properties</SubTitle>
      <DocTable columns={PropertiesColumns} data={PropertitesData} />
      <Description>
        It accepts all props which Input component support.
      </Description>
    </ContentWrapper>
  );
};
