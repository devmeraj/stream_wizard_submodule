import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import ShowList from '../components/stream/ShowLists';
import ShowStream from '../components/stream/ShowStream';
import EditStream from '../components/stream/EditStream';
import CreateStream from '../components/stream/CreateStream';
import DeleteStream from '../components/stream/DeleteStream';

class App extends Component {

    render() {
        return(
            <div className="ui container">
                
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={ShowList} />
                        <Route path="/stream/:id" exact component={ShowStream} />
                        <Route path="/stream/edit/:id" component={EditStream} />
                        <Route path="/stream/new" component={CreateStream} />
                        <Route path="/stream/delete/:id" exact component={DeleteStream} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;