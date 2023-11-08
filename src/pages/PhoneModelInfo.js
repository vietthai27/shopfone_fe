import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPhoneModelInfo } from '../action/PhoneModelAction';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

function PhoneModelInfo() {

    const { phoneModelInfo } = useSelector((reduxData) => reduxData.phoneModelReducer)

    let { modelId } = useParams();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPhoneModelInfo(modelId))
    }, [dispatch,modelId])

    return (
        <div className='userForm'>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        Tên mẫu điện thoại: {phoneModelInfo.phoneName}
                    </CardTitle>
                </CardBody>
                <ListGroup flush>
                    <ListGroupItem>
                        Mã IMEM: {phoneModelInfo.phoneImei}
                    </ListGroupItem>
                    <ListGroupItem>
                        Giá bán: {phoneModelInfo.phonePrice}
                    </ListGroupItem>
                    <ListGroupItem>
                        Đã bán: {phoneModelInfo.soldStatus ? true(<AiFillCheckCircle />) : (<AiFillCloseCircle />)}
                    </ListGroupItem>
                    <ListGroupItem>
                        Dòng điện thoại: {phoneModelInfo.lineName}
                    </ListGroupItem>
                    <ListGroupItem>
                        Hãng điện thoại: {phoneModelInfo.brandName}
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    );
}

export default PhoneModelInfo;