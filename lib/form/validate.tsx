import {FormValue} from './form';

type FormRules = Array<FormRule>

interface FormRule {
  key: string
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  validator?: {
    name: string,
    validate: (value: string) => Promise<void>
  }
}



function isEmpty(value: any) {
  return value === undefined || value === null || value === '';

}

export function noError(errors: any) {
  return Object.keys(errors).length === 0;
}

const Validator = (formValue: FormValue, rules: FormRules, callback: (errors: any) => void): void => {
  let errors: any = {};
  const addError = (key: string, message: string | Promise<any>) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(message);
  };
  rules.map(rule => {
    const value = formValue[rule.key];
    if (rule.validator) {
      console.log('validate---' + value);
      const promise = rule.validator.validate(value);
      addError(rule.key, promise);
    }
    if (rule.required) {
      if (isEmpty(value)) {
        addError(rule.key, '必填');
      }
    }
    if (rule.minLength) {
      if (!isEmpty(value) && value.length < rule.minLength) {
        addError(rule.key, '太短');
      }
    }
    if (rule.maxLength) {
      if (!isEmpty(value) && value.length > rule.maxLength) {
        addError(rule.key, '太长');
      }
    }
    if (rule.pattern) {
      if (!(rule.pattern.test(value))) {
        addError(rule.key, '格式不正确');
      }
    }
  });
  Promise.all(flat(Object.values(errors))).then(() => {
    callback(errors);
  }, () => {
    callback(errors);
  });
};
export default Validator;

function flat(array: Array<any>) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      result.push(...array[i]);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}