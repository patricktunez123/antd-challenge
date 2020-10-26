import React, { Component } from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

const { Option } = Select;

class Register extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row main_container">
                        <div className="col-md-8 white_bg left_container">
                            <h1>Awesomity register</h1>
                            <p className="pabo8">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                            </p>
                            <Form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Item
                                        name="fname"
                                        rules={[{ required: true, message: 'Your firstname plz' }]}
                                        >
                                            <Input className="form_input" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Item
                                        name="lname"
                                        rules={[{ required: true, message: 'Your lastname plz' }]}
                                        >
                                            <Input className="form_input" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last Name" />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Item
                                        name="dob"
                                        rules={[{required: true, message: 'Please select your DOB'}]}
                                        >
                                            <DatePicker
                                                className="form_input"
                                                placeholder="Date of Birth"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Item name="gender" rules={[{ required: true }]}>
                                            <Select
                                                size="large"
                                                placeholder="Select gender"
                                            >
                                                <Option className="form_input" value="male">Male</Option>
                                                <Option className="form_input" value="female">Female</Option>
                                                <Option className="form_input" value="other">Other</Option>
                                            </Select>
                                        </Form.Item>
                                    </div>
                                </div>
                                <Form.Item
                                    name="uname"
                                    rules={[{ required: true, message: 'Please enter your username' }]}
                                >
                                    <Input className="form_input" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Please enter your email', type: "email" }]}
                                >
                                    <Input className="form_input" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Your email" />
                                </Form.Item>
                                
                                <Form.Item>
                                    <Input.Group compact>
                                        <Form.Item
                                            name={['phone']}
                                            noStyle
                                            rules={[{ required: true, message: 'Phone number is required' }]}
                                        >
                                            <Select
                                             size="large"
                                             placeholder="+250">
                                            <Option value="rw">+250</Option>
                                            <Option value="ug">+290</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            name={['phone']}
                                            noStyle
                                            rules={[{ required: true, message: 'Phone number is required' }]}
                                        >
                                            <Input 
                                             className="phone_input"
                                             placeholder="--- --- ---" />
                                        </Form.Item>
                                    </Input.Group>
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Create password plz' }]}
                                    hasFeedback
                                >
                                    <Input.Password
                                        className="form_input"
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="btn_primary form_input"
                                        
                                    >
                                        Register
                                    </Button>
                                </Form.Item>
                            </Form>
                            <div className="go_to_login_btn pabo8"><a href="/">Go to login</a></div>
                            <h6><span>Or sign in with</span></h6>
                            <div class="socail pabo8">
                                <ul>
                                    <li><a href="/"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                                    <li><a href="/"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                    <li><a href="/"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                            <p className="powered_by"><span className="text-muted">Powered by</span> <a target="_blank" rel="noreferrer" href="https://awesomity.rw/">Awesomity Lab</a></p>
                        </div>
                        <div className="col-md-4 dark_blue_bg right_containter">

                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Register;