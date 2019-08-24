import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { directive } from '@babel/types';
import {StyledB} from './Styled'


export default class B extends Component {

    render(){
        return(
            <StyledB>
                <div className='head'>
                    <img className='headImg' src={require('../../../assets/fakeData/fakeHeadImg.png')} alt='' height='' />
                    <h1>Increasing Prosperity With Positive Thinking</h1>
                </div>
                <div className='content'>
                    <p>As humans, we have progressed in so many ways, but we have lost touch with our bodies, nature, and the power of prayer. There seems to be a spiritual renaissance, of sorts, going on in the “new age” movement.</p>
                </div>   
            </StyledB>
        )
    }

}