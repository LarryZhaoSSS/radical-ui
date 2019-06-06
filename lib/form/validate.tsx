import {FormValue} from "./form";

type FormRules = Array<FormRule>

interface FormRule {
  key: string
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?:RegExp
}

interface FormErrors {
  [k: string]: string[]
}
function isEmpty(value:any) {
  if(value===undefined || value===null|| value==='') {
    return true
  }
  return false
}
const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
  let errors:any = {}
  const addError=(key:string,message:string)=>{
    if(errors[key]  === undefined) {
      errors[key] = []
    }
    errors[key].push(message)
  }
  rules.map(rule=>{
    const value = formValue[rule.key]
    if(rule.required) {
      if(isEmpty(value)) {
        addError(rule.key,'必填')
      }
    }
    if(rule.minLength) {
      if(!isEmpty(value) && value.length< rule.minLength) {
        addError(rule.key,'太短')
      }
    }
    if(rule.maxLength) {
      if(!isEmpty(value) && value.length> rule.maxLength) {
        addError(rule.key,'太长')
      }
    }
    if(rule.pattern) {
      if(!(rule.pattern.test(value))) {
        addError(rule.key,'格式不正确')
      }
    }
  })
  return errors
}
export default Validator