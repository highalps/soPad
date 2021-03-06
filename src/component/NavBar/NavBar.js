/* */
import React from 'react';
import autobind from 'core-decorators/lib/autobind'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

/* */
import styles from './NavBar.scss';
import { userActions, uiActions } from '../../redux/actions'

const mapStateToProps = (state) => ({
    isLogged: state.userReducer.isLogged,
    ifTutor: state.userReducer.tutor,
})

@withRouter
@connect(mapStateToProps)
class NavBar extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
        }
    }

    @autobind
    handleClickLogout() {
        this.props.dispatch(userActions.logout())
        this.props.history.push('/')
    }

    @autobind
    handleButtonClick() {
        this.props.dispatch(uiActions.openSignModal())
    }

    renderLoginButton() {
        if (!this.props.isLogged) {
            return (
                <div className={styles.button} onClick={this.handleButtonClick}>
                    <i className="fa fa-unlock-alt" />
                    <span className={styles.name}>로그인</span>
                </div>
            )
        }
        return (
            <div className={styles.button} onClick={this.handleClickLogout}>
                <i className="fa fa-lock" />
                <span className={styles.name}>로그아웃</span>
            </div>
        )
    }
    renderTutorButton() {
        if (!this.props.ifTutor && this.props.isLogged) {
            return (
                <Link className={styles.button} to="RegisterTutor">
                    <i className="fa fa-star" />
                    <span className={styles.name}>튜터등록</span>
                </Link>
            )
        }
        return null
    }

    renderInfoButton() {
        if (this.props.isLogged) {
            return (
                <Link className={styles.button} to="MyPage">
                    <i className="fa fa-user-o" />
                    <span className={styles.name}>내정보</span>
                </Link>
            )
        }
        return null
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <Link to="">
                    <div className={styles.logo}>
                        CoCo tutor
                    </div>
                </Link>
                <div className={styles.menu}>
                    {this.renderTutorButton()}
                    <Link className={styles.button} to="Classes">
                        <i className="fa fa-search" />
                        <span className={styles.name}>강의검색</span>
                    </Link>
                    {this.renderInfoButton()}
                    {this.renderLoginButton()}
                </div>
            </div>
        )
    }
}

NavBar.propTypes = {
    isLogged: PropTypes.bool,
}

NavBar.defaultProps = {
    isLogged: false,
}

export default NavBar
