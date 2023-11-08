import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../action/UserAction';
import { Label, Form, FormGroup, Input, Button } from 'reactstrap';
import validator from 'validator';
import { toast } from 'react-toastify';

function SignUp() {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")

    const dispatch = useDispatch()

    const signup = () => {
        let userSignup = {
            username: username,
            password: password,
            email: email
        }
        if (userSignup.username === null || userSignup.username === '') {
            toast.warn("Chưa nhập tên người dùng")
        } else if (userSignup.password === null || userSignup.password === '') {
            toast.warn("Chưa nhập mật khẩu")
        } else if (userSignup.email === null || userSignup.email === '') {
            toast.warn("Chưa nhập email")
        } else if (!validator.isEmail(userSignup.email)) {
            toast.warn("Email chưa đúng định dạng")
        } else
            dispatch(signupUser(userSignup))
    }

    return (
        <div className='userForm'>
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
                    <Label >
                        Email
                    </Label>
                    <Input
                        onBlur={(e) => { setemail(e.target.value) }}
                    />
                    <Button onClick={() => {
                        signup()
                    }}>Đăng ký</Button>
                </FormGroup>
            </Form>
        </div>
    );
}

export default SignUp;