import React, { Component } from 'react';
import { connect } from "react-redux";
import { LANGUAGES } from '../../../utils'
import { FormattedMessage } from 'react-intl';
import './ManagePatient.scss';
import { getListPatientForDoctor } from '../../../services/userService';
import moment from 'moment';
import DatePicker from '../../../components/Input/DatePicker';


class ManagePatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDate: moment(new Date()).startOf('day').valueOf(),
            dataPatient: []

        }
    }

    async componentDidMount() {
        let { user } = this.props;
        let { currentDate } = this.state;
        let formatedDate = new Date(currentDate).getTime() // đổi sang unix timestemp dạng string
        this.getDataPatient(user, formatedDate)
    }

    getDataPatient = async (user, formatedDate) => {
        let res = await getListPatientForDoctor({
            doctorId: user.id,
            date: formatedDate
        })
        if (res && res.errCode === 0) {
            this.setState({
                dataPatient: res.data ? res.data : ''
            })
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {

        }
    }

    handleChangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0]
        }, () => {
            let { user } = this.props;
            let { currentDate } = this.state;
            let formatedDate = new Date(currentDate).getTime();
            this.getDataPatient(user, formatedDate)

        })

    }


    render() {
        let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
        let { dataPatient } = this.state
        return (
            <div className='manage-patient-container'>
                <div className='m-p-title'>
                    Quản lý bệnh nhân khám bệnh
                </div>
                <div className='m-p-body row'>
                    <div className='col-4 form-group'>
                        <label>Chọn ngày khám</label>
                        <DatePicker
                            onChange={this.handleChangeDatePicker}
                            className="form-control"
                            value={this.state.currentDate}
                            minDate={yesterday}
                        />
                    </div>
                    <div className='col-12 table-manage-patient'>
                        <table style={{ width: '100%' }}>
                            <tbody>
                                <tr>
                                    <th>Numerical order</th>
                                    <th>Time</th>
                                    <th>Full Name</th>
                                    <th>Address</th>
                                    <th>Gender</th>
                                    <th>Actions</th>

                                </tr>
                                {dataPatient && dataPatient.length > 0 ?
                                    dataPatient.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.timeTypeDataPatient.valueEn}</td>
                                                <td>{item.patientData.firstName}</td>
                                                <td>{item.patientData.address}</td>
                                                <td>{item.patientData.genderData.valueEn}</td>
                                                <td>
                                                    <button className='mp-btn-confirm'
                                                        onClick={() => this.handleBtnConfirm()}>
                                                        Confirm
                                                    </button>
                                                    <button className='mp-btn-send-remedy'
                                                        onClick={() => this.handleBtnRemedy()}>
                                                        Send Remedy
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    <tr>
                                        <td style={{ textAlign: 'center', color: 'red', fontSize: '20px' }} colSpan={6}>No Data</td>
                                    </tr>
                                }

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        language: state.app.language,
        user: state.user.userInfo

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);
