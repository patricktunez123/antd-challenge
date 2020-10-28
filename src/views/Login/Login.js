/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React from 'react';
import { Form, Input, Button } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

const Login = () => (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row main_container">
                        <div className="col-md-8 white_bg left_container">
                            <h1>Awesomity Login</h1>
                            <p className="pabo8">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                            </p>
                            <Form>
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'OOps! Your email is required', type: 'email' }]}
                                >
                                    <Input className="form_input" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Your email" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Your password plz' }]}
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
                                    <Button type="primary" htmlType="submit" className="btn_primary form_input">
                                        Login
                                    </Button>
                                </Form.Item>
                            </Form>
                            <div className="forgot_btn pabo8"><a href="/reset-password">Forgot Password?</a></div>
                            <div className="go_to_login_btn pabo8"><a href="/create-account">New? SIGN UP</a></div>
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

export default Login;
