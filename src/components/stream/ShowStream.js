import React, { Component } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';

import {fetchStream} from '../../actions';

class ShowStream extends Component {
    constructor(props){
        super(props);
        this.videoRef = React.createRef();
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchStream(id);
        this.loadPlayer();
        
    }

    componentDidUpdate(){
        this.loadPlayer();
    }
    
    componentWillUnmount(){
        this.player.destroy();
        console.log('destroyed');
    }
    loadPlayer(){
        const { id } = this.props.match.params;
        if(this.player || !this.props.stream){
            return;
        }

        this.player = flv.createPlayer({
            type: 'flv',
            url:  `http://localhost:8000/live/${id}.flv`
        });
            this.player.attachMediaElement(this.videoRef.current);
            this.player.load();
    }
    
    render(){

        if(!this.props.stream) {
            return "Loading...";
        }
        
        
        const {title, description} = this.props.stream;
        
        return(
            <div className="ui segment">
                <video ref={this.videoRef} style={{width: '100%'}} controls></video>
                <div className="header">{title}</div>
                <h5 className="content">{description}</h5>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream})(ShowStream);