import * as React from 'react';
import { CitySelect } from './city-select';

const CitySelectExample: React.FunctionComponent = () => {
  return (
    <div>
      <div>
        <h2>第一个例子</h2>
        <CitySelect>city</CitySelect>
      </div>
    </div>
  );
};
export { CitySelectExample };
