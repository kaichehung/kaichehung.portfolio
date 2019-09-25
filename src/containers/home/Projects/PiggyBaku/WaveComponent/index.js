import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import {StyledWaveComponent} from './Styled'
import waveBot from './wave-bot.png'
import waveMid from './wave-mid.png'
import waveTop from './wave-top.png'


export default class WaveComponent extends Component {
    render(){
        return(
            <StyledWaveComponent>
                <div className="waveWrapper waveAnimation">
                    <div className="waveWrapperInner bgTop">
                        <div className="wave waveTop" style={{backgroundImage: `url(${waveTop})`}}></div>
                    </div>
                    <div className="waveWrapperInner bgMiddle">
                        <div className="wave waveMiddle" style={{backgroundImage: `url(${waveMid})`}}></div>
                    </div>
                    <div className="waveWrapperInner bgBottom">
                        <div className="wave waveBottom" style={{backgroundImage: `url(${waveBot})`}}></div>
                    </div>
                </div>
            </StyledWaveComponent>
        )
    }

}