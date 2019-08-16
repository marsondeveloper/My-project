import React from 'react';
import Header from "./Header";
import {getAuthUserData} from "../../redux/auth-reduce";
import {connect} from "react-redux";



class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData(this.props.id, this.props.email, this.props.login)
    }
    render() {
        return < Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {getAuthUserData}) (HeaderContainer);