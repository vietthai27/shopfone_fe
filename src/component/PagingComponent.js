import React, { useState } from 'react';
import { Button, Input, Label } from 'reactstrap';
import { BsFillSkipBackwardFill, BsFillSkipForwardFill, BsFillSkipStartFill, BsFillSkipEndFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { getPhoneModelData } from '../action/PhoneModelAction';
import { toast } from 'react-toastify';

function PagingComponent() {

    const dispatch = useDispatch()

    const { pagingData, search } = useSelector((reduxData) => reduxData.phoneModelReducer)

    const [toPage, setToPage] = useState(0)

    const handelToPage = (toPage) => {
        if (toPage === null || toPage === '') toast.warn("Chưa nhập số trang")
        else if (isNaN(toPage) === true) toast.warn("Số trang phải là kiểu số")
        else if (toPage <= 0 || toPage > pagingData.totalPages) toast.warn("Trang nhập không hợp lệ")
        else dispatch(getPhoneModelData(toPage, search))
    }

    return (
        <div className='pagingBox'>
            <div className='step'>
                {pagingData.first === true
                    ? (<div style={{ display: "flex" }}>
                        <Button disabled title='Trang đầu' ><BsFillSkipBackwardFill className='icon' /></Button>
                        <Button disabled title='Trang trước' ><BsFillSkipStartFill className='icon' /></Button>
                    </div>)
                    : (<div style={{ display: "flex" }}>
                        <Button title='Trang đầu' onClick={() => { dispatch(getPhoneModelData(1, search)) }}><BsFillSkipBackwardFill className='icon' /></Button>
                        <Button title='Trang trước' onClick={() => { dispatch(getPhoneModelData(pagingData.number, search)) }}><BsFillSkipStartFill className='icon' /></Button>
                    </div>)
                }
                {pagingData.last === true
                    ? (<div style={{ display: "flex" }}>
                        <Button disabled title='Trang sau'><BsFillSkipEndFill className='icon' /></Button>
                        <Button disabled title='Trang cuối'><BsFillSkipForwardFill className='icon' /></Button>
                    </div>)
                    : (<div style={{ display: "flex" }}>
                        <Button title='Trang sau' onClick={() => { dispatch(getPhoneModelData(pagingData.number + 2, search)) }}><BsFillSkipEndFill className='icon' /></Button>
                        <Button title='Trang cuối' onClick={() => { dispatch(getPhoneModelData(pagingData.totalPages, search)) }}><BsFillSkipForwardFill className='icon' /></Button>
                    </div>)
                }
            </div>
            <div className='jump'>
                <Label>Trang số: </Label>
                <Input placeholder={pagingData.number + 1} onBlur={(e) => { setToPage(e.target.value) }}></Input>
                <Button onClick={() => { handelToPage(toPage) }}>Đi tới trang</Button>
            </div>
            <div className='total'>
                <Label>Tổng số trang: {pagingData.totalPages}</Label>
            </div>
        </div>
    );
}

export default PagingComponent;