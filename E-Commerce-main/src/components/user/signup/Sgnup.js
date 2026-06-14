import React from 'react';
import { Button, Card, Checkbox, Form, Input, Select } from 'antd';
import { Option } from 'antd/es/mentions';
const Sgnup = () => {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 90,
        }}
      >
        <Option value="977">+977</Option>
        <Option value="01">+01</Option>
      </Select>
    </Form.Item>
  );
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  return (
    <div>
     <Card
      style={{
        width: 800,
      }}
    >
      <Form
    onFinish={onFinish}
    layout='vertical'
  >
    <div className="grid grid-cols-12 gap-x-2 w-full">
<div className="col-span-6">
<Form.Item
      label="First Name"
      name="firstname"
    >
      <Input />
    </Form.Item>
</div>
<div className="col-span-6">
<Form.Item
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
</div>
<div className="col-span-6">
<Form.Item
      label="Last Name"
      name="lastname"
    >
      <Input />
    </Form.Item>
</div>

<div className="col-span-6">
<Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
</div>
<div className="col-span-6">
<Form.Item
        name="phone"
        label="Phone Number"
      >
        <Input
        addonBefore={prefixSelector}
        style={{
          width: '100%',
        }}
/>
      </Form.Item>
</div>
<div className="col-span-6">
<Form.Item
        name="gender"
        label="Gender"
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
</div>
<div className="col-span-6">
<Form.Item
      label="Password"
      name="password"
    >
      <Input.Password />
    </Form.Item>
</div>
<div className="col-span-6">
<Form.Item
      label="Confirm Password"
      name="Cpassword"
    >
      <Input.Password />
    </Form.Item>
</div>
    </div>
    <Form.Item
        name="agreement"
        valuePropName="checked"
        className="flex justify-center"
      >
        <Checkbox>
          I have read the <a href="prayush.com">agreement</a>
        </Checkbox>
      </Form.Item>
    <Form.Item
    className=" flex justify-center"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" className='' >
        Submit
      </Button>
      <div> 
      <Button className="bg-emerald-400">
       Login
      </Button>
      <div>
        Already Have an account
        </div>
      </div>
      
    </Form.Item>
  </Form>
    </Card>
    </div>
  )
}

export default Sgnup
