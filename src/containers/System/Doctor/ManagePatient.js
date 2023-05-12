import React, { Component } from 'react';
import { connect } from "react-redux";
import { LANGUAGES } from '../../../utils'
import { FormattedMessage } from 'react-intl';
import './ManagePatient.scss';

import DatePicker from '../../../components/Input/DatePicker';


class ManagePatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDate: '',

        }
    }

    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {

        }
    }

    handleChangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0]
        })

    }


    render() {
        let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

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
                            <tr>
                                <th>Name</th>
                                <th colSpan={2}>Telephone</th>
                            </tr>
                            <tr>
                                <td>Van Quoc</td>
                                <td>0966******</td>
                                <td>0326 anh co vo roi</td>
                            </tr>
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

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);
