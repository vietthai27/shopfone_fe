import React, { useEffect, useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoneLineData } from '../action/PhoneLineAction';
import { addPhoneModel } from '../action/PhoneModelAction';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



function PhoneModelAdd() {

    const { allPhoneLine } = useSelector((reduxData) => reduxData.phoneLineReducer)
    

    const dispatch = useDispatch()
    const navigate = useNavigate()

    let dataPhoneModel = {
        "phoneName": "",
        "phoneImei": "",
        "phonePrice": ""
    }

    const [autoCreateCode, setautoCreateCode] = useState(false)

    let lineId = 0

    useEffect(() => {
        dispatch(getPhoneLineData())
    }, [dispatch])

    const handleChange = (e) => {
        lineId = e.target.value
    }

    const checkAutoCode = (e) => {
        if (e === true) {
            setautoCreateCode(true)
        } else { setautoCreateCode(false) }
    }

    const submitDataPhoneMolde = () => {
        if (lineId === 0) {
            lineId = allPhoneLine[0].id
        }
        if (dataPhoneModel.phoneName === null || dataPhoneModel.phoneName === '') {
            toast.warn("Chưa nhập tên mẫu")
        } else if ((dataPhoneModel.phoneImei === null || dataPhoneModel.phoneImei === '') && autoCreateCode === false) {
            toast.warn("Chưa nhập IMEI mẫu")
        } else if (dataPhoneModel.phonePrice === null || dataPhoneModel.phonePrice === '') {
            toast.warn("Chưa nhập giá tiền")
        } else {
            dispatch(addPhoneModel(dataPhoneModel, lineId))
            navigate("/")
        }
    }

    const testValue = (e) => {
        console.log(e.target.value);
    }

    return (
        <div className='userForm'>
            <h1>Thêm mẫu điện thoại</h1>
            <Form>
                <FormGroup>
                    <Label for="modelName">
                        Tên mẫu
                    </Label>
                    <Input
                        name="name"
                        placeholder="Nhập tên mẫu"
                        type="text"
                        onBlur={(e) => {testValue(e) }}
                    />
                    <FormGroup check style={{
                        padding: '0',
                        display: 'flex'
                    }}>
                        <Input style={{ margin: 'auto 5px' }} type="checkbox" defaultChecked={false} onChange={(e) => { checkAutoCode(e.target.checked) }} />
                        <Label style={{ margin: '10px 5px' }} check>
                            Tự tạo mã
                        </Label>
                    </FormGroup>
                    {autoCreateCode === false ?
                        (<div>
                            <Label for="modelIMEI">
                                Mã IMEI
                            </Label>
                            <Input
                                name="IMEI"
                                placeholder="Nhập mã IMEI"
                                type="text"
                                onBlur={(e) => { dataPhoneModel.phoneImei = e.target.value }}
                            />
                        </div>)
                        : (null)
                    }
                    <Label for="modelPrice">
                        Giá tiền
                    </Label>
                    <Input
                        name="price"
                        placeholder="Nhập số tiền"
                        type="text"
                        onBlur={(e) => { dataPhoneModel.phonePrice = e.target.value }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="phoneLine">
                        Dòng điện thoại
                    </Label>
                    <Input
                        onChange={handleChange}
                        name="phoneLine"
                        type="select"
                    >
                        {allPhoneLine.map((item) => (
                            <option key={item.id} value={item.id} >
                                {item.lineName}
                            </option>
                        ))}
                    </Input>
                </FormGroup>
                <Button onClick={submitDataPhoneMolde}>
                    Lưu thông tin
                </Button>
            </Form>
        </div>
    );
}

export default PhoneModelAdd;