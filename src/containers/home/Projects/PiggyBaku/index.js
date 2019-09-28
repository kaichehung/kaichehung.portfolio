import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { directive } from '@babel/types';
import {StyledPiggyBaku} from './Styled';
import {StyledProjects} from '../Styled'

import WaveComponent from './WaveComponent';

export default class PiggyBaku extends Component {

    render(){
        return(
            <StyledProjects>
            <StyledPiggyBaku >
                <div className='head'>
                    <h1>Piggy Baku</h1>
                    <h2>UX/UI Design</h2>
                    <img id='hand' src={require('../../../../assets/images/piggybaku/phoneOnHand.png')} alt='' />
                    <p>
                        Keep track of your account won't save you money, <br/>
                        Follow your budget plan Does !!
                    </p>
                    <p>
                        We had tried so many times. We kept our good habbit for one or two weeks, many times to 
                        record our daily expense. We hope that we can not only being very clear about where money goes,
                        but also save some money by cutting down unnecessary expense, but we fail. No matter on a notebook,
                        Excel sheet or on app. It's not out fault. There just no handy tool for this exist.  
                    </p>
                    <a href='https://www.behance.net/gallery/46942425/PiggyBoku-(demo-ver)' target='blank'>
                        <p id='linkText'>see detail on Behance</p>
                    </a>
                    <WaveComponent></WaveComponent>
                </div>

            </StyledPiggyBaku>
            </StyledProjects>
        )
    }

}