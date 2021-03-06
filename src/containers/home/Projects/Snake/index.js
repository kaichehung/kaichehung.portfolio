import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { directive } from '@babel/types';
import {StyledSnake} from './Styled'
import {StyledProjects} from '../Styled'
import SubApp from './src/index'
export default class Snake extends Component {

    render(){
        return(
            <StyledProjects>
            <StyledSnake>
                <div className='head'>                    
                    <h1 className='title projectTitle'>Snake</h1>
                    <h2>React-Redux framework</h2>
                </div>
                <div className='content'>
                    <p>Retro snake game which is made of react-redux framework with detail implementation including redux-observable, reselect, immutable</p>    
                </div>
                <div className='subAppWrapper'>
                    <SubApp/>
                </div>
                <div ></div>
            </StyledSnake>
            </StyledProjects>
        )
    }

}