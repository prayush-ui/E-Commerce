import React, { useState } from 'react';
import { Button, Card, Checkbox, Form, Input, Modal } from 'antd';
import { userLogin } from '../../../services/Loginaction';
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate=useNavigate()
    const dispatch=useDispatch();
  const onFinish = async (values) => {
      await userLogin(values)(dispatch).unwrap();
       navigate('/')
  }
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const data=useSelector((state)=>state)
  console.log("testdata",data)
  return(
  <div>
  
    <Card
      style={{
        width: 800,
      }}
    >
      
      
    <Form
    onFinish={onFinish}
  >
    <Form.Item
      label="Username"
      name="username"
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>
    <a href="sarad.com">agreement</a>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" className="bg-emerald-400" loading={data?.authinfo?.loading}>
        Submit
      </Button>
    </Form.Item>
    <Form.Item>
    <p onClick={showModal} className="cursor-pointer hover:text-blue-700">
       Forget Password?
      </p>
    </Form.Item>
   
  </Form>
    </Card>
    {
      isModalOpen &&(
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      )
    }
     
  </div>
  )
};
export default Login;