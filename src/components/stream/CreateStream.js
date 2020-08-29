import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import {streamCreate} from '../../actions';
class CreateStream extends Component{
    
    renderInputFields = ({input, label}) => {
        
        return(
            <div className="ui field">
                <label>{label}</label>
                <input type="text" {...input} />
            </div>
        );
    }

    onFormSubmit = (formValues) => {
        this.props.streamCreate(formValues);
    }
    render(){
        return(
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <Field label="Title" name="title" component={this.renderInputFields} />
                <Field label="Description" name="description" component={this.renderInputFields} />
                <button type="submit" className="ui button red">Create</button>
            </form>
        );
    }
}


export default connect(null, {
    streamCreate
})(reduxForm({form: 'streams'})(CreateStream));