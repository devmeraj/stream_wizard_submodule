import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component{
    constructor(props){
        super(props);
        this.state = {modal: true}
    }

    renderModalClasses(){
        if(this.state){
            return this.state.modal ? "visible active" : ""; 
        }
        
    }
    onModalExit = (e) => {
        this.setState({modal: !this.state.modal});
    }
    render(){
        return ReactDOM.createPortal(
            <div className={`ui dimmer modals page ${this.renderModalClasses()}`} onClick={this.onModalExit}>
                <div className="ui standart modal longer visible active" onClick={e => e.stopPropagation()}>
                    <i className="close icon" onClick={this.onModalExit}></i>
                    <div className="header">
                        Delete Stream?
                    </div>
                    <div className="content">
                        Are you sure want to delete the stream with title: {this.props.stream.title}?
                    </div>
                    <div className="actions">
                        <div className="ui button" onClick={this.onModalExit}>Cancel</div>
                        <div className="ui button" onClick={id => this.props.streamDelete(id)}>OK</div>
                    </div>
                </div>
            </div>
        , document.querySelector('#modal'));
    }
}

export default Modal;