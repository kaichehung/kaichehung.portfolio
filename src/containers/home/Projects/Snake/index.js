import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { directive } from '@babel/types';
import {StyledSnake} from './Styled'
import SubApp from './src/index'
export default class Snake extends Component {

    render(){
        return(
            <StyledSnake>
                <div className='head'>                    
                    <h1 className='title projectTitle'>Snake</h1>
                </div>
                <div className='content'>
                    <p>old fashion nokia snake game</p>    
                    {/* <img className='headImg' src={require('../../../../assets/fakeData/fakeHeadImg.png')} alt='' height='' /> */}
                </div>
                <div className='subAppWrapper'>
                    <SubApp/>
                </div>
            </StyledSnake>
        )
    }

}