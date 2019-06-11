import * as React from 'react';
import Form, {FormValue} from './form';
import {useState} from 'react';
import Validator, {noError} from './validate';
import Button from '../button';

const userNames = [
  'frank',
  'jack',
  'alice',
  'larry'
];
const checkUserName = (username: string, succeed: () => void, failed: () => void) => {
  setTimeout(() => {
    if (userNames.indexOf(username) >= 0) {
      failed();
    } else {
      succeed();
    }
  }, 2000);

};

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  });
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}

  ]);
  const [errors, setErrors] = useState({});
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      {key: 'username', required: true},
      {key: 'password', required: true},
      {key: 'username', minLength: 3, maxLength: 8},
      {key: 'username', pattern: /^[A-Za-z0-9]+$/},
      {
        key: 'username',
        validator: {
          name: 'unique',
          validate(username: string) {
            console.log('use validate');
            return new Promise<void>((resolve, reject) => {
              checkUserName(username, resolve, reject);
            });
          }
        }
      }
    ];
    Validator(formData, rules, (errors) => {
      console.log('dou callback');
      if (noError(errors)) {
        return;
      }
      console.log(errors);
      setErrors(errors);
    });

  };
  return (
    <Form value={formData} fields={fields} buttons={
      <>
        <Button>取消</Button>
        <Button level={'important'} type="submit">提交</Button>
      </>
    }
          errors={errors}
          onChange={newValue => setFormData(newValue)}
          onSubmit={onSubmit}
    />
  );
};
export default FormExample;