import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchWord, getPhoneModelData } from '../action/PhoneModelAction';
import { Button, Input } from 'reactstrap';

function SearchComponent() {

    const dispatch = useDispatch()

    const { search } = useSelector((reduxData) => reduxData.phoneModelReducer)

    const handelSearch = () => {
        dispatch(getPhoneModelData(1, search))
    }

    return (
        <div className='searchBox'>
            <Input placeholder='Nhập từ khóa' onBlur={(e) => { dispatch(changeSearchWord(e.target.value)) }} />
            <Button color="secondary" onClick={() => { handelSearch() }}>Tìm kiếm</Button>
        </div>
    );
}

export default SearchComponent;