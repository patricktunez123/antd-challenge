/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React from 'react';
import { Form, Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const ResetPassword = () => (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row main_container">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 white_bg inner_container">
                            <h1>Awesomity Reset Password</h1>
                            <p className="pabo8">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                            </p>
                            <Form>
                                <Form.Item
                                    name="email"
                                    id="email"
                                    rules={[{ required: true, message: 'Please input your email', type: 'email' }]}
                                >
                                    <Input className="form_input" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Your email" />
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="btn_primary form_input"

                                    >
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                            <div className="forgot_btn pabo8"><a href="/">Cancel</a></div>
                            <p className="powered_by"><span className="text-muted">Powered by</span> <a target="_blank" rel="noreferrer" href="https://awesomity.rw/">Awesomity Lab</a></p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
);

export default ResetPassword;
