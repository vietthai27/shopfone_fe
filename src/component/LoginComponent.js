import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserNameByToken } from '../action/UserAction';
import { Button } from 'reactstrap';

function LoginComponent() {

    const { tokenState, username } = useSelector((reduxData) => reduxData.userReducer)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserNameByToken(localStorage.getItem("userToken")))
    }, [dispatch])

    return (
        <div>
            {tokenState === false ?
                (<div className='loginBox'>
                    <p>Bạn chưa đăng nhập </p>
                    <Button color='primary' className='add' onClick={() => { navigate("/login") }}>Đăng nhập</Button>
                </div>)
                :
                (<div className='loginBox'>
                    <p>Xin chào {username} !!</p>
                    <Button color='primary' className='add' onClick={() => { navigate("/"); localStorage.removeItem("userToken"); dispatch(getUserNameByToken(localStorage.getItem("userToken"))) }}>Đăng xuất</Button>
                </div>)
            }
        </div>
    );
}

export default LoginComponent;