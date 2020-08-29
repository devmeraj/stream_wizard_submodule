import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchStream, streamDelete} from '../../actions';
import Modal from './Modal';

class DeleteStream extends Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    render(){
        const id = this.props.match.params.id;
        if(!this.props.stream){
            return "";
        }
        return <Modal stream={this.props.stream} streamDelete={() => this.props.streamDelete(id)} />;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps, {fetchStream, streamDelete})(DeleteStream);