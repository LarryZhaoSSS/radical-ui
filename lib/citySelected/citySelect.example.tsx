import * as React from 'react';
import { CitySelect } from './city-select';
import { cityList } from './city-name';

const CitySelectExample: React.FunctionComponent = () => {
  return (
    <div>
      <div>
        <h2>第一个例子</h2>
        <CitySelect
          dataSource={cityList}
          onChange={(cityName: string) => {
            console.log(cityName);
          }}
        >
          city
        </CitySelect>
      </div>
    </div>
  );
};
export { CitySelectExample };
