import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { directive } from '@babel/types';
import {StyledNYCCimreDataVis} from './Styled'


export default class NYCCimreDataVis extends Component {

    render(){
        return(
            <StyledNYCCimreDataVis>
                <div className='head'>
                    <h1>2018 NYC Crime <br/> 
                        Data Visualization
                    </h1>
                    <h2>Data Vis</h2>
                    
                </div>  
            </StyledNYCCimreDataVis>
        )
    }

}