import React from 'react';
import { TbDeviceMobileCode } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import SearchComponent from './SearchComponent';


function HeaderComponent() {

    const navigate = useNavigate()

    return (
        <div className='header'>
            <div className='logoBox' onClick={() => { navigate("/") }}>
                <TbDeviceMobileCode className='logo' />
                <h1>Quản lý điện thoại</h1>
            </div>
            <SearchComponent/>
            <LoginComponent/>
        </div>
        
    );
}

export default HeaderComponent;