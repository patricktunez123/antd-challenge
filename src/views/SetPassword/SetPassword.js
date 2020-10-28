/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React from 'react';
import { Form, Input, Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import Bottom from '../../components/Bottom';

/**
 * Set new password page
 * @author Awesomity Lab (Patrick)
 * @since 29.10.2020
 *
 */

const SetPassword = () => (
    <React.Fragment>
        <div className="container-fluid">
            <div className="row main_container">
                <div className="col-md-3"></div>
                <div className="col-md-6 white_bg inner_container">
                    <h1>Set New Password</h1>
                    <p className="pabo8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                    </p>
                    <Form>
                        <Form.Item
                            name="password"
                            id="password"
                            rules={[{ required: true, message: 'Please input your password', type: 'password' }]}
                        >
                            <Input className="form_input" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="btn_primary form_input"

                            >
                                Set New Password
                            </Button>
                        </Form.Item>
                    </Form>
                    <Bottom />
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default SetPassword;
