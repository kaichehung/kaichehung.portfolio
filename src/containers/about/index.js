import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { StyledAbout } from './Styled';


export default class About extends Component{
    render(){
        return(
            <StyledAbout>
                <div className=''>
                    <p>place holder</p>
                </div>
            </StyledAbout>
        )
    }   
}