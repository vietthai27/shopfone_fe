import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { getPhoneModelInfo, editPhoneModel } from '../action/PhoneModelAction';
import { getPhoneLineData } from '../action/PhoneLineAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function PhoneModelEdit() {

    const { phoneModelInfo } = useSelector((reduxData) => reduxData.phoneModelReducer)
    const { allPhoneLine } = useSelector((reduxData) => reduxData.phoneLineReducer)

    let { phoneId } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let dataPhoneModel = {
        "phoneName": "",
        "phoneImei": "",
        "phonePrice": ""
    }

    let lineId = 0

    const handleChange = (e) => {
        lineId = e.target.value
    }

    useEffect(() => {
        dispatch(getPhoneModelInfo(phoneId))
        dispatch(getPhoneLineData())
    }, [dispatch,phoneId])

    const submitDataPhoneMolde = () => {
        if (lineId === 0) {
            lineId = allPhoneLine[0].id
        }
        if (dataPhoneModel.phoneName === null || dataPhoneModel.phoneName === '') {
            toast.warn("Chưa nhập tên mẫu")
        } else if (dataPhoneModel.phoneImei === null || dataPhoneModel.phoneImei === '') {
            toast.warn("Chưa nhập IMEI mẫu")
        } else if (dataPhoneModel.phonePrice === null || dataPhoneModel.phonePrice === '') {
            toast.warn("Chưa nhập giá tiền")
        } else {
            dispatch(editPhoneModel(phoneId, dataPhoneModel, lineId))
            navigate("/")
        }

    }

    return (
        <div className='userForm'>
            <h1>Sửa thông tin mẫu</h1>
            <Form>
                <FormGroup>
                    <Label for="modelName">
                        Tên mẫu
                    </Label>
                    <Input
                        name="name"
                        placeholder={phoneModelInfo.phoneName}
                        type="text"
                        onBlur={(e) => { dataPhoneModel.phoneName = e.target.value }}
                    />
                    <Label for="modelIMEI">
                        Mã IMEI
                    </Label>
                    <Input
                        name="IMEI"
                        placeholder={phoneModelInfo.phoneImei}
                        type="text"
                        onBlur={(e) => { dataPhoneModel.phoneImei = e.target.value }}
                    />
                    <Label for="modelPrice">
                        Giá tiền
                    </Label>
                    <Input
                        name="price"
                        placeholder={phoneModelInfo.phonePrice}
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
                        defaultValue={String(phoneModelInfo.id)}
                    >                       
                            {
                                allPhoneLine.map((item) => (
                                    <option key={item.id} value={item.id} >
                                        {item.lineName}
                                    </option>
                                ))
                            }                        
                    </Input>
                </FormGroup>
                <Button
                    onClick={submitDataPhoneMolde}
                >
                    Lưu thông tin
                </Button>
            </Form>
        </div>
    );
}

export default PhoneModelEdit;