import React, { Component } from 'react';
import { connect } from "react-redux";
import { LANGUAGES } from '../../../utils'
import { FormattedMessage } from 'react-intl';
import HomeHeader from '../../HomePage/HomeHeader';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import DoctorExtraInfor from '../Doctor/DoctorExtraInfor';
import ProfileDoctor from '../Doctor/ProfileDoctor';
import './DetailSpecialty.scss'



class DetailSpecialty extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrDoctorsId: [25, 29]
        }
    }

    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {

        }
    }


    render() {

        let { arrDoctorsId } = this.state

        return (
            <div className='detail-specialty-container'>
                <HomeHeader />
                <div className='detail-specialty-body'>


                    <div className='description-specialty'>

                    </div>

                    {arrDoctorsId && arrDoctorsId.length > 0 &&
                        arrDoctorsId.map((item, index) => {
                            return (
                                <div className='each-doctor' key={index}>
                                    <div className='dts-content-left'>
                                        <div className='profile-doctor'>
                                            <ProfileDoctor
                                                doctorId={item}
                                                // dataTime={dataTime}
                                                isShowDescriptionDoctor={true}
                                            />
                                        </div>
                                    </div>
                                    <div className='dts-content-right'>
                                        <div className='doctor-schedule'>
                                            <DoctorSchedule
                                                doctorIdFromParent={item}
                                            />
                                        </div>
                                        <div className='doctor-extra-infor'>
                                            <DoctorExtraInfor
                                                doctorIdFromParent={item}
                                            />
                                        </div>

                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);
