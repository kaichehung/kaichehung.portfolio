import React, {Component} from 'react';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import store from './store';

class subApp extends Component{
    render(){
        return(
            <Provider store={store}>
                <App class='subApp' />
            </Provider>
    )}
}

export default subApp;
