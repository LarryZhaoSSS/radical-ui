import * as React from "react";
import Form, {FormValue} from "./form";
import {useState} from "react";

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  })
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}

  ])
  const onSubmit = () => {
    console.log(formData)
  }
  return (
    <Form value={formData} fields={fields} buttons={
      <>
        <button>取消</button>
        <button type="submit">提交</button>
      </>
    }
    onChange={newValue=>setFormData(newValue)}
    onSubmit={onSubmit}
    />
  )
}
export default FormExample