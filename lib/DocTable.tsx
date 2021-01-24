import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1rem 0;
  overflow: auto;
  > table {
    display: table;
    border-collapse: separate;
    box-sizing: border-box;
    text-indent: initial;
    border-spacing: 2px;
    border-color: grey;
    thead {
      display: table-header-group;
      vertical-align: middle;
      border-color: inherit;
      tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
      }
    }
    td {
      display: table-cell;
      vertical-align: inherit;
    }
  }
  > .doc-table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    th {
      border-bottom: 1px solid #dee2e6;
      padding: 1em;
      text-align: left;
      color: #495057;
      font-size: 14px;
    }
    tbody {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;
      td {
        border-bottom: 1px solid #dee2e6;
        padding: 1em;
        text-align: left;
        color: #495057;
      }
    }
  }
`;
type Props = {
  columns: Array<string>;
  data: Array<any>;
};
export const DocTable: React.FC<Props> = props => {
  const { columns, data } = props;
  return (
    <Wrapper>
      <table className="doc-table">
        <thead>
          <tr>
            {columns.map((col, index) => {
              return <th key={index}>{col}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                {columns.map((col, idx) => {
                  return <td key={idx}>{item?.[col] || ''}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};
