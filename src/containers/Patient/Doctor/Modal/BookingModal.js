import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './BookingModal.scss'
import { Modal } from 'reactstrap';
import ProfileDoctor from '../ProfileDoctor';
import _ from 'lodash';


class BookingModal extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {

        }
    }


    render() {
        let { isOpenModal, isCloseModal, dataTime } = this.props
        let doctorId = dataTime && !_.isEmpty(dataTime) ? dataTime.doctorId : ''
        return (
            <>
                <Modal isOpen={isOpenModal}
                    className={'booking-modal-container'}
                    size='lg'
                    centered
                >
                    <div>
                        <div className='booking-modal-content'>
                            <div className='booking-modal-header'>
                                <span className='left'>Thông tin đặt lịch khám bệnh</span>
                                <span className='right' onClick={isCloseModal}>
                                    <i className='fas fa-times'></i>
                                </span>

                            </div>
                            <div className='booking-modal-body'>
                                <div className='doctor-infor'>
                                    <ProfileDoctor
                                        doctorId={doctorId}
                                        dataTime={dataTime}
                                        isShowDescription={false}
                                    />
                                </div>
                                <div className='row'>
                                    <div className='col-6 form-group'>
                                        <label>Họ và Tên</label>
                                        <input className='form-control' />
                                    </div>
                                    <div className='col-6 form-group'>
                                        <label>Số điện thoại</label>
                                        <input className='form-control' />
                                    </div>
                                    <div className='col-6 form-group'>
                                        <label>Địa chỉ Email</label>
                                        <input className='form-control' />
                                    </div>
                                    <div className='col-6 form-group'>
                                        <label>Địa chỉ liên hệ</label>
                                        <input className='form-control' />
                                    </div>
                                    <div className='col-12 form-group'>
                                        <label>Lý do khám</label>
                                        <input className='form-control' />
                                    </div>
                                    <div className='col-6 form-group'>
                                        <label>Người đặt</label>
                                        <input className='form-control' />
                                    </div>
                                    <div className='col-6 form-group'>
                                        <label>Giới tính</label>
                                        <input className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <div className='booking-modal-footer'>
                                <button className='btn-booking-confirm' onClick={isCloseModal}>Xác nhận</button>
                                <button className='btn-booking-cancel' onClick={isCloseModal}>Hủy</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
