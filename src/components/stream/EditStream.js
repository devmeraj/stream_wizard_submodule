import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import {streamEdit, fetchStream} from '../../actions';
class editStream extends Component{

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    
    renderInputFields = ({input, label}) => {
        
        return(
            <div className="ui field">
                <label>{label}</label>
                <input type="text" {...input} />
            </div>
        );
    }

    onFormSubmit = (formValues) => {
        this.props.streamEdit(this.props.match.params.id, formValues);
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

const mapStateToProps = (state, ownProps) => {
    return {
        initialValues: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {
    streamEdit, fetchStream
})(reduxForm({form: 'streams'})(editStream));