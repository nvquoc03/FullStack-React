import React, { Component } from 'react';
import { connect } from "react-redux";
import { LANGUAGES, CommonUtils } from '../../../utils'
import { FormattedMessage } from 'react-intl';
import './ManageClinic.scss'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { createNewClinic } from '../../../services/userService';
import { toast } from 'react-toastify';


const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageClinic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clinicName: '',
            address: '',
            imageBase64: '',
            descriptionHTML: '',
            descriptionMarkdown: '',

        }
    }

    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {

        }
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            descriptionHTML: html,
            descriptionMarkdown: text,
        })
    }

    handleOnChangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file); //--> Mã hóa sang base64
            this.setState({
                imageBase64: base64
            })

        }
    }

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })

    }

    handleSaveNewClinic = async () => {
        let res = await createNewClinic(this.state);
        if (res && res.errCode === 0) {
            toast.success("Add new clinic succeeds!")
            this.setState({
                clinicName: '',
                address: '',
                imageBase64: '',
                descriptionHTML: '',
                descriptionMarkdown: '',
            })
        } else {
            toast.error("Add new clinic fail...");
            console.log("Check add new clinic fail", res)
        }
    }



    render() {
        return (
            <>
                <div className='manage-clinic-container'>
                    <div className='title-ms'>
                        Manage Clinic
                    </div>
                    <div className='add-new-clinic row'>
                        <div className='col-6 form-group'>
                            <label>Tên phòng khám</label>
                            <input className='form-control' type='text'
                                value={this.state.clinicName}
                                onChange={(event) => this.handleOnChangeInput(event, 'clinicName')}
                            />
                        </div>
                        <div className='col-6 form-group'>
                            <label>Ảnh phòng khám</label>
                            <input className='form-control-file' type='file'
                                onChange={(event) => this.handleOnChangeImage(event)}
                            />
                        </div>
                        <div className='col-6 form-group'>
                            <label>Địa chỉ phòng khám</label>
                            <input className='form-control' type='text'
                                value={this.state.address}
                                onChange={(event) => this.handleOnChangeInput(event, 'address')}
                            />
                        </div>
                        <div className='col-12'>
                            <MdEditor
                                style={{ height: '400px', marginTop: '10px' }}
                                renderHTML={text => mdParser.render(text)}
                                onChange={this.handleEditorChange}
                                value={this.state.descriptionMarkdown} />
                        </div>
                        <div className='col-12'>
                            <button
                                onClick={() => this.handleSaveNewClinic()}
                                className='save-content-clinic'>
                                <span>Lưu thông tin</span>
                            </button>
                        </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(ManageClinic);
