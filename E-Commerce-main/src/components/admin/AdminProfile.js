import React from 'react'
import Header from './Header'
import { Form } from 'antd'
import { AntdInput, AntdUploader, SaveButton } from '../common/Index';


const AdminProfile = () => {
  const handleFinish = (values) => {
    console.log('Success:', values);
  };
  return (
    <div>
      <div className='flex justify-center'>
        <Header name='AdminProfile' />
      </div>
      <Form className=' grid grid-cols-2 gap-3 ' onFinish={handleFinish}>
      <div>
        <AntdInput required name="inputa" label="First Name"/>
      </div>
      <div>
        <AntdInput required name="inputm" label="Middle Name"/>
      </div>
      <div>
        <AntdInput required name="inputb" label="Last Name"/>
      </div>
      <div>
        <AntdInput required name="inputc" label="Email" type="email"/>
      </div>
      <div>
        <AntdInput required name="inputd" label="Phone" type="number"/>
      </div>
      <div>
        <AntdUploader required name="inputs"  label="picture"/>
      </div>
      <div>
      <SaveButton name="save" htmlType="submit">
          Submit
      </SaveButton>
      </div>
      </Form>
    </div>
  )
}
export default AdminProfile