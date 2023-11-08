import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { loginUser } from '../action/UserAction';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const dispatch = useDispatch()

    const login = () => {
        const userInput = {
            username: username,
            password: password
        }
        if (userInput.username === null || userInput.username === '') {
            toast.warn("Chưa nhập tên người dùng")
        } else if (userInput.password === null || userInput.password === '') {
            toast.warn("Chưa nhập mật khẩu")
        } else {
            dispatch(loginUser(userInput))
        }
    }

    return (
        <div className='userForm' >
            <Form>
                <FormGroup>
                    <Label >
                        Tên đăng nhập
                    </Label>
                    <Input
                        onBlur={(e) => { setusername(e.target.value) }}
                    />
                    <Label >
                        Mật khẩu
                    </Label>
                    <Input
                        onBlur={(e) => { setpassword(e.target.value) }}
                    />
                    <Button onClick={() => {
                        login()
                    }}>Đăng nhập</Button>
                </FormGroup>
                <Label>Chưa có tài khoản ? <Link to={"/signUp"}>Đăng ký</Link></Label>
            </Form>
        </div>
    );
}

export default Login;