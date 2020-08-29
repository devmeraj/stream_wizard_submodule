import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {showStreams} from '../../actions';

class ShowLists extends Component {
    componentDidMount() {
        this.props.showStreams();
    }

    renderStreamList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                        <Link to={`/stream/${stream.id}`} className="header">{stream.title}</Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return(
            <div className="ui relaxed divided list">
                {this.renderStreamList()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        streams: Object.values(state.streams)
    }
}
export default connect(mapStateToProps, {
    showStreams
})(ShowLists);