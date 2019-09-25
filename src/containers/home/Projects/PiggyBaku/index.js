import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { directive } from '@babel/types';
import {StyledPiggyBaku} from './Styled'
import WaveComponent from './WaveComponent'

export default class PiggyBaku extends Component {

    render(){
        return(
            <StyledPiggyBaku>
                <div className='head'>
                    <h1>Piggy Baku</h1>
                    <h2>UX/UI Design</h2>
                    <WaveComponent className ='bgWave' />
                </div>
            </StyledPiggyBaku>
        )
    }

}