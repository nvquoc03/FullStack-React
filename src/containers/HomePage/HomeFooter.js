import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {


    render() {
        return (
            <div className='home-footer'>
                <p>&copy; Study Code With sherlockNguyenDev 2023 <a target='_blank' href="https://www.facebook.com/vanquoc.2le3">More Information...</a> </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
