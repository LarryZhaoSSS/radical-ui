import * as React from 'react';
import {ReactFragment} from 'react';
import Input from '../input/input';
import classes from '../helpers/classnames';
import './form.scss';

export interface FormValue {
  [k: string]: any
}

interface Props {
  value: FormValue
  fields: Array<{ name: string, label: string, input: { type: string } }>
  buttons: ReactFragment
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onChange: (value: FormValue) => void
  errors: { [k: string]: string[] }
  errorsDisplayMode?: 'first' | 'all'
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(e);
  };

  const onInputChange = (name: string, value: string) => {
    console.log(name, value);
    const newFormValue = {...formData, [name]: value};
    props.onChange(newFormValue);
  };
  return (
    <form onSubmit={onSubmit}>
      <table className='r-parts-form-table'>
        <tbody>
        {props.fields.map(f =>
          <tr className={classes('r-parts-form-tr')} key={f.name}>
            <td className='r-parts-form-td'>
                   <span className="r-parts-form-label">
                      {f.label}
                    </span>
            </td>
            <td className='r-parts-form-td'>
              <Input className='r-parts-form-input' type={f.input.type}
                     value={formData[f.name]}
                     onChange={(e) => onInputChange(f.name, e.target.value)}
              />
              <div
                className='r-parts-form-error'>

                {
                  props.errors[f.name] ?
                    (props.errorsDisplayMode === 'first'
                      ? props.errors[f.name][0] : props.errors[f.name].join(','))
                    : <span>&nbsp;</span>
                }
              </div>
            </td>
          </tr>
        )}
        <tr className="r-parts-form-tr">
          <td className="r-parts-form-td"/>
          <td className="r-parts-form-td">
            {props.buttons}
          </td>
        </tr>
        </tbody>

      </table>
    </form>
  );
};
Form.defaultProps = {
  errorsDisplayMode: 'first'
};
export default Form;