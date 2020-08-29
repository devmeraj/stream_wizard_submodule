import React, { Component } from 'react';
import { signIn, signOut } from '../actions';
import { connect } from 'react-redux';

class GoogleAuth extends Component {

    onAuthChange = (signInStatus) => {
        if(signInStatus){
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }
    
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '605184601176-s3t0o11kb9q33r40791vrnujm3khlpf0.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    
    
    renderSignInStatus() {
        if(this.props.signedIn){
            return (
            <button onClick={this.onSignOutClick} className="ui red button">
                <i className="google icon" /> Sign Out
            </button>
            );
        } else {
            return (
            <button onClick={this.onSignInClick} className="ui red button">
                <i className="google icon" /> Sign In
            </button>
            );
        }
    }

    
    render() {
        return <div>
            {this.renderSignInStatus()}
        </div>
    }

}

const mapStateToProps = (state) => {
    return {
        signedIn: state.auth.signedIn
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);