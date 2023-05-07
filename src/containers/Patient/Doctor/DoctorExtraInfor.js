import React, { Component } from 'react';
import { connect } from "react-redux";
import './DoctorExtraInfor.scss';
import { LANGUAGES } from '../../../utils'
import { FormattedMessage } from 'react-intl';
import { getExtraInforDoctorById } from '../../../services/userService';
import NumberFormat from 'react-number-format'


class DoctorExtraInfor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfor: false,
            extraInfor: {}
        }

    }

    handleShowHide = (status) => {
        this.setState({
            isShowDetailInfor: status
        })
    }

    async componentDidMount() {
        if (this.props.doctorIdFromParent) {
            let res = await getExtraInforDoctorById(this.props.doctorIdFromParent);
            if (res && res.errCode === 0) {
                this.setState({
                    extraInfor: res.data
                })

            }

        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.doctorIdFromParent !== this.props.doctorIdFromParent) {
            let res = await getExtraInforDoctorById(this.props.doctorIdFromParent);
            if (res && res.errCode === 0) {
                this.setState({
                    extraInfor: res.data
                })
            }
        }
    }



    render() {
        let { isShowDetailInfor, extraInfor } = this.state;
        let { language } = this.props

        return (
            <>
                <div className='doctor-extra-infor-container'>
                    <div className='content-up'>
                        <div className='text-address'>
                            <FormattedMessage id="patient.extra-infor-doctor.text-address" />
                        </div>
                        <div className='name-clinic'>
                            {extraInfor && extraInfor.nameClinic ? extraInfor.nameClinic : ''}
                        </div>
                        <div className='detail-address'>
                            {extraInfor && extraInfor.addressClinic ? extraInfor.addressClinic : ''}
                        </div>
                    </div>
                    <div className='content-down'>
                        {isShowDetailInfor === false ?
                            <div className='short-infor'>
                                <FormattedMessage id="patient.extra-infor-doctor.price" />
                                {extraInfor && extraInfor.priceIdData && language === LANGUAGES.VI &&
                                    <NumberFormat
                                        className='currency'
                                        value={extraInfor.priceIdData.valueVi}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        suffix={'VND.'}
                                    />
                                }
                                {extraInfor && extraInfor.priceIdData && language === LANGUAGES.EN &&
                                    <NumberFormat
                                        className='currency'
                                        value={extraInfor.priceIdData.valueEn}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        suffix={'$.'}
                                    />
                                }


                                <span className='detail' onClick={() => this.handleShowHide(true)}>
                                    <FormattedMessage id="patient.extra-infor-doctor.detail" />

                                </span>
                            </div>
                            :
                            <>
                                <div className='title-price'>
                                    <FormattedMessage id="patient.extra-infor-doctor.price" />
                                </div>
                                <div className='detail-infor'>
                                    <div className='price'>
                                        <span className='left'>
                                            <FormattedMessage id="patient.extra-infor-doctor.price" />
                                        </span>
                                        <span className='right'>
                                            {extraInfor && extraInfor.priceIdData && language === LANGUAGES.VI &&
                                                <NumberFormat
                                                    className='currency'
                                                    value={extraInfor.priceIdData.valueVi}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    suffix={'VND'}
                                                />
                                            }
                                            {extraInfor && extraInfor.priceIdData && language === LANGUAGES.EN &&
                                                <NumberFormat
                                                    className='currency'
                                                    value={extraInfor.priceIdData.valueEn}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    suffix={'$'}
                                                />
                                            }
                                        </span>
                                    </div>
                                    <div className='note'>
                                        {extraInfor && extraInfor.note ? extraInfor.note : ''}

                                    </div>
                                </div>

                                <div className='payment'>
                                    <FormattedMessage id="patient.extra-infor-doctor.payment" />
                                    {extraInfor && extraInfor.paymentIdData && language === LANGUAGES.VI ?
                                        extraInfor.paymentIdData.valueVi : ''}
                                    {extraInfor && extraInfor.paymentIdData && language === LANGUAGES.EN ?
                                        extraInfor.paymentIdData.valueEn : ''}

                                </div>
                                <div className='hide-infor'>
                                    <span className='detail' onClick={() => this.handleShowHide(false)}>
                                        <FormattedMessage id="patient.extra-infor-doctor.hide-infor" />

                                    </span>
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
