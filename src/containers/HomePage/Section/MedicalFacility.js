import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';

import Slider from 'react-slick';

class MedicalFacility extends Component {

    render() {

        return (
            <div>
                <div className='section-share section-medical-facility'>
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='title-section'>Cơ sở y tế nổi bật</span>
                            <button className='btn-section'>Xem thêm</button>
                        </div>
                        <div className='section-body'>
                            <Slider {...this.props.settings}>
                                <div className='section-customize'>
                                    <div className='bg-image section-medical-facility'></div>
                                    <div>Bệnh viện đa khoa An Việt 1</div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bg-image section-medical-facility'></div>
                                    <div>Bệnh viện đa khoa An Việt 2</div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bg-image section-medical-facility'></div>
                                    <div>Bệnh viện đa khoa An Việt 3</div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bg-image section-medical-facility'></div>
                                    <div>Bệnh viện đa khoa An Việt 4</div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bg-image section-medical-facility'></div>
                                    <div>Bệnh viện đa khoa An Việt 5</div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bg-image section-medical-facility'></div>
                                    <div>Bệnh viện đa khoa An Việt 6</div>
                                </div>
                            </Slider>
                        </div>


                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
