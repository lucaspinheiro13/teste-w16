import { Button, Form, Input, Space } from 'antd';

import React from 'react';



const LoginForm=() => {
  const [loginForm] = Form.useForm();
  return (

    <Form
      form={loginForm}
      name="loginForm"
      initialValues={{ remember: true }}
      layout="vertical"
      autoComplete="on"
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Enter your email address' }]}
      >
        <Input placeholder="Enter your email address" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Enter your password' }]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>

      <Form.Item>
        <Space size={18}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;