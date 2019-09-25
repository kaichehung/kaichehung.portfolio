import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { directive } from '@babel/types';
import {StyledWorldLoader} from './Styled'


export default class WorldLoader extends Component {

    render(){
        return(
            <StyledWorldLoader>
                <div className='head'>
                    <h1>World Loader</h1>
                    <h2>thesis project</h2>
                    
                </div> 
            </StyledWorldLoader>
        )
    }

}