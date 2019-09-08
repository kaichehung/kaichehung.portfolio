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
                    <h1>Piggy Baku</h1>
                    <h2>UX/UI Design</h2>
                    <img className='headImg' src={require('../../../../assets/fakeData/piggyBaku-h.png')} alt='' height='' />

                </div>
            </StyledB>
        )
    }

}