import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoneModelData, deletePhoneModel } from '../action/PhoneModelAction';
import { Button, Table } from 'reactstrap';
import { AiFillCloseCircle, AiFillCheckCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import PagingComponent from '../component/PagingComponent';

function PhoneModel() {

    const { allPhoneModel, errorLoadingData, search } = useSelector((reduxData) => reduxData.phoneModelReducer)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPhoneModelData(1, search))
    }, [dispatch])

    const getPhoneModelInfo = (modelId) => {
        navigate(`infoPhoneModel/${modelId}`)
    }

    const editPhoneModel = (modelId) => {
        navigate(`editPhoneModel/${modelId}`)
    }

    const deletePhoneModelHandler = (modelId) => {
        dispatch(deletePhoneModel(modelId))
    }

    return (
        <div className='phoneModel'>

            <h1>Mẫu điện thoại</h1>
            <Button color="warning" className='add' onClick={() => { navigate("/addPhoneModel") }}>Thêm mẫu điện thoại</Button>
            {errorLoadingData === true ?
                (<div>
                    <h2 style={{ textAlign: "center" }}>Lỗi không có dữ liệu</h2>
                </div>)
                :
                (<div>
                    <Table striped hover className='table'>
                        <thead>
                            <tr>
                                <td>STT</td>
                                <td>IMEI</td>
                                <td>Tên mẫu điện thoại</td>
                                <td>Giá</td>
                                <td>Đã bán</td>
                            </tr >
                        </thead >
                        <tbody>
                            {allPhoneModel.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.rowNum}</td>
                                    <td>{item.phoneImei}</td>
                                    <td>{item.phoneName}</td>
                                    <td>{item.phonePrice}</td>
                                    <td>{item.soldStatus ? true(<AiFillCheckCircle />) : (<AiFillCloseCircle />)}</td>
                                    <td><Button color='info' onClick={() => { getPhoneModelInfo(item.id) }}>Xem chi tiết</Button></td>
                                    <td><Button color='success' onClick={() => { editPhoneModel(item.id) }}>Sửa thông tin</Button></td>
                                    <td><Button color='danger' onClick={() => { deletePhoneModelHandler(item.id) }}>Xóa</Button></td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </Table >
                    <PagingComponent />
                </div >)
            }
        </div >
    );
}

export default PhoneModel;