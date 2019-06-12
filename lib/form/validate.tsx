import {FormValue} from './form';

type FormRules = Array<FormRule>

interface FormRule {
  key: string
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  validator?: (value: string) => Promise<string>

}


function isEmpty(value: any) {
  return value === undefined || value === null || value === '';

}

export function noError(errors: any) {
  return Object.keys(errors).length === 0;
}

type OneError = string | Promise<string>

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
      const promise = rule.validator(value);
      addError(rule.key, promise);
    }
    if (rule.required) {
      if (isEmpty(value)) {
        addError(rule.key, 'required');
      }
    }
    if (rule.minLength) {
      if (!isEmpty(value) && value.length < rule.minLength) {
        addError(rule.key, 'minLength');
      }
    }
    if (rule.maxLength) {
      if (!isEmpty(value) && value.length > rule.maxLength) {
        addError(rule.key, 'maxLength');
      }
    }
    if (rule.pattern) {
      if (!(rule.pattern.test(value))) {
        addError(rule.key, 'pattern');
      }
    }
  });
  const x = Object.keys(errors).map(key =>
    errors[key].map(promise => [key, promise])
  );
  const y = flat(x);
  const z = y.map(([key, promiseOrString]) =>
    (promiseOrString instanceof Promise ?
      promiseOrString : Promise.reject(promiseOrString)).then(() => {
      return [key, undefined];
    }, (reason: string) => {
      return [key, reason];
    }));
  console.log('zzzz');
  console.log(z);
  Promise.all(z).then(results => {
    console.log(zip(results.filter(item => item[1])));
    callback(zip(results.filter(item => item[1])))
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

// kvList =['username','error1'],['username','e2']
function zip(kvList: Array<[string, string]>) {
  const result = {};
  kvList.map(([key, value]) => {
    result[key] = result[key] || [];
    result[key].push(value);
  });
  return result;
}

// function fromEntries(array: Array<[string, string[]]>) {
//   const result: { [key: string]: string[] } = {};
//   for (let i = 0; i < array.length; ++i) {
//     result[array[i][0]] = array[i][1];
//   }
//   return result;
// }