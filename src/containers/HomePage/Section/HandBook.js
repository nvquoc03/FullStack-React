import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Slider from 'react-slick';






class HandBook extends Component {


    render() {





        return (
            <div className='section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm Nang</span>
                        <button className='btn-section'>Tất cả bài viết</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' ></div>
                                <div>Gói chăm sóc sức khỏe tại nhà 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' ></div>
                                <div>Gói chăm sóc sức khỏe tại nhà 2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' ></div>
                                <div>Gói chăm sóc sức khỏe tại nhà 3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' ></div>
                                <div>Gói chăm sóc sức khỏe tại nhà 4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' ></div>
                                <div>Gói chăm sóc sức khỏe tại nhà 5</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' ></div>
                                <div>Gói chăm sóc sức khỏe tại nhà 6</div>
                            </div>
                        </Slider>
                    </div>


                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
