import React from 'react';
import { confirmAlert } from 'react-confirm-alert';

import '../style/Login.css';

class Login extends React.Component {

    upload = () => {
        if (this.props.dataLoaded) {
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className='custom-ui'>
                            <h1 style={{ color: '#0F9D58' }}>All done?</h1>
                            <p> All your selected changes will be reflected on Google Sheets!</p>
                            <div className='alert-container'>
                                <button className="checkbox" style={{ color: '#0F9D58' }}
                                    onClick={() => {
                                        this.props.saveChanges(true);
                                        onClose();
                                    }}>
                                    Yes
                                </button>
                                <button className="checkbox" onClick={onClose}>Cancel</button>
                            </div>
                        </div>
                    );
                }
            });
        }
        else {
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className='custom-ui'>
                            <h1 style={{ color: '#F4B400' }}>Data not been loaded</h1>
                            <p> To upload you must Load data at the start page and then make changes!</p>
                            <div className='alert-container'>
                                <button className="checkbox" style={{ color: '#F4B400' }}
                                    onClick={() => {
                                        this.props.changePage(0);
                                        onClose();
                                    }}>
                                    Go to Start
                                </button>
                                <button className="checkbox" onClick={onClose}>Cancel</button>
                            </div>
                        </div>
                    );
                }
            });
        }
    }

    keyInputChange = e => {
        this.props.keyInputChange(e);
    }

    render() {
        return (
            <div className="Login container">
                <div className="login">
                    <div className="price">
                        <h4><i className="fas fa-users-cog"></i>User Settings</h4>
                    </div>
                    <h5>Which type of Twelve data API key would you like to use?</h5>
                    <div className={"settings " + (this.props.publicKey? '' : 'private')}>
                        <div className="daySetting">
                            <div className={"day " + (this.props.publicKey? 'selected' : '')} onClick={() => this.props.toggleKey()}>Public</div>
                            <div className={"day " + (this.props.publicKey? '' : 'selected')} onClick={() => this.props.toggleKey()}>Private</div>
                        </div>
                        <div className="spacer"></div>
                        <div className={"api " + this.props.keyErrColor}>
                            <i className="fas fa-key"/>
                            <input className="key" onChange={this.keyInputChange}/>
                            <i className={"fas " + this.props.keyIcon +" save"} onClick={() => this.props.saveKey()}></i>
                            <p className={"error " + this.props.keyErr}>Invalid Key</p>
                        </div>
                    </div>
                </div>
                <div className="svg-container">
                    <svg viewBox="0 0 100 15">
                        <path fill="#0CAF82" d="M0 30 V12 Q30 17 55 12 T100 11 V30z" />
                    </svg>
                </div>

            </div>
        );
    }
}

export default Login;