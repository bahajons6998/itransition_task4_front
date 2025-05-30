import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { baseurl } from '../util/baseurl';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const onFinish = values => {
    console.log('Received values of form: ', values);
    login(values)
  };

  async function login(values) {

    axios({
      method: 'POST',
      url: `${baseurl}/api/auth/login`,
      data: values
    })
      .then((res) => {
        console.log(res)
        localStorage.removeItem('token')
        localStorage.setItem('token', res.data.token)
        console.log(res?.data?.user?.blocked)
        if (res?.data?.user?.blocked == 1) {
          navigate('/blocked');
        }
        else {
          navigate('/dashboard');
        }
      })
      .catch((err) => {
        setError(err?.response?.data)
        console.log(err?.response?.data)
      });

  }





  return (
    <div className='login'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-4 offset-md-1'>
            <h3 className='text-center mb-3'>Login</h3>
            <Form
              name="login"
              initialValues={{ remember: true }}
              style={{ maxWidth: 360 }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
              </Form.Item>
              <p className='text-danger'>{error?.error}</p>
              <Form.Item>
                <Flex justify="end" align="center">
                  <Link to={'/register'}>Register</Link>
                </Flex>
              </Form.Item>

              <Form.Item>
                <Button block type="primary" htmlType="submit">
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className='col-md-6 d-none d-md-block'>
            {/* <img className='w-100' src='./img.webp' /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;