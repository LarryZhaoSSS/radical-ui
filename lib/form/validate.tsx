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

interface OneError {
  message: string
  promise?: Promise<any>
}

const Validator = (formValue: FormValue, rules: FormRules, callback: (errors: any) => void): void => {
  let errors: any = {};
  const addError = (key: string, error: OneError) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(error);
  };
  rules.map(rule => {
    const value = formValue[rule.key];
    if (rule.validator) {
      console.log('validate---' + value);
      const promise = rule.validator.validate(value);
      addError(rule.key, {message: rule.validator.name, promise});
    }
    if (rule.required) {
      if (isEmpty(value)) {
        addError(rule.key, {message: 'required'});
      }
    }
    if (rule.minLength) {
      if (!isEmpty(value) && value.length < rule.minLength) {
        addError(rule.key, {message: 'minLength'});
      }
    }
    if (rule.maxLength) {
      if (!isEmpty(value) && value.length > rule.maxLength) {
        addError(rule.key, {message: 'maxLength'});
      }
    }
    if (rule.pattern) {
      if (!(rule.pattern.test(value))) {
        addError(rule.key, {message: 'pattern'});
      }
    }
  });
  const promiseList = flat(Object.values(errors)).filter(item => item.promise)
    .map(item => item.promise);
  const x = () => {
    const newErrors = fromEntries(
      Object.keys(errors).map<[string, string[]]>(key =>
        [key, errors[key].map((item: OneError) => item.message)]));
    callback(newErrors);
  };
  Promise.all(promiseList).then(x, x);


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

function fromEntries(array: Array<[string, string[]]>) {
  const result: { [key: string]: string[] } = {};
  for (let i = 0; i < array.length; ++i) {
    result[array[i][0]] = array[i][1];
  }
  return result;
}