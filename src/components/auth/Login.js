import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { toastr } from 'react-redux-toastr'
import useValidator from '../common/hooks/useValidator';
import { getLoginAccessToken } from '../../actions';
import Loader from '../common/loader/Loader'
import { MESSAGES } from '../../config/Constant'

const Login = (props) => {

    const formFields = {
        email: '',
        password: '',
    }

    const [loading, setLoading] = useState(false);
    const [fields, setField] = useState(formFields);
    const [validator, showValidationMessage] = useValidator();
    const dispatch = useDispatch();


    /**
     * @method login
     * @description handle login api calling
     */
    const login = () => {
        setLoading(true)
        dispatch(getLoginAccessToken(res => {
            console.log('res', res)
            if (res.status === 200) {
                localStorage.setItem('loginDetails', JSON.stringify(res.data));
                toastr.success('Success', MESSAGES.LOGIN_SUCCESS)
                props.history.push('/')
            }
        }))
    }

    /**
     * @method handleSubmit
     * @description handle form submit
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        (validator.allValid()) ? login() : showValidationMessage(true);
    }

    /**
    * @method handleChange
    * @description handle input change
    */
    const handleChange = (e) => {
        const { name, value } = e.target
        setField(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div>
            {loading && <Loader />}
            <div className="login-box">
                <div className="login-logo">
                    <h1>Login</h1>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="form-item">
                        <Form.Control
                            type="email"
                            name={'email'}
                            placeholder="Enter email"
                            value={fields.email}
                            onChange={handleChange}
                        />
                        {validator.message('email', fields.email, 'required|email', { className: 'text-danger' })}
                    </Form.Group>

                    <Form.Group className="form-item">
                        <Form.Control
                            type="password"
                            name={'password'}
                            placeholder="Password"
                            value={fields.password}
                            onChange={handleChange}
                        />
                        {validator.message('password', fields.password, 'required', { className: 'text-danger' })}
                    </Form.Group>
                    <div className="d-grid">
                        <Button variant="secondary" size="lg" type="submit">Sign In</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login