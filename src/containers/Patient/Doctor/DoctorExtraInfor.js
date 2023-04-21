import React, { Component } from 'react';
import { connect } from "react-redux";
import './DoctorExtraInfor.scss';
import { LANGUAGES } from '../../../utils'
import { FormattedMessage } from 'react-intl';


class DoctorExtraInfor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfor: false
        }

    }

    handleShowHide = (status) => {
        this.setState({
            isShowDetailInfor: status
        })
    }



    render() {
        let { isShowDetailInfor } = this.state

        return (
            <>
                <div className='doctor-extra-infor-container'>
                    <div className='content-up'>
                        <div className='text-address'>Địa chỉ khám</div>
                        <div className='name-clinic'>Phòng khám chuyên khoa da liễu</div>
                        <div className='detail-address'>Ngõ 123, Hai Bà Trưng, Hà Nội</div>
                    </div>
                    <div className='content-down'>
                        {isShowDetailInfor === false ?
                            <div className='short-infor'>
                                Giá khám: 250.000VND.
                                <span onClick={() => this.handleShowHide(true)}> Xem chi tiết</span>
                            </div>
                            :
                            <>
                                <div className='title-price'>Giá khám</div>
                                <div className='detail-infor'>
                                    <div className='price'>
                                        <span className='left'>Giá khám</span>
                                        <span className='right'>250.000VND</span>
                                    </div>
                                    <div className='note'>
                                        Được ưu tiên khi khám tại BookingCare. Đối với người nước ngoài là 30 USD
                                    </div>
                                </div>

                                <div className='payment'>
                                    Người bệnh có thể thanh toán bằng thẻ tín dụng hoặc tiền mặt
                                </div>
                                <div className='hide-infor'>
                                    <span onClick={() => this.handleShowHide(false)}>Ẩn xem chi tiết</span>
                                </div>
                            </>
                        }


                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
