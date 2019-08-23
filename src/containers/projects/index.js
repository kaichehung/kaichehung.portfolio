import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { StyledProjects } from './Styled';


export default class Projects extends Component{


    render(){
        return(
            <StyledProjects>
            <div className='content'>
                <ul>
                    <li>{}project title place holder</li> 
                    <li>{}project title place holder</li> 
                    <li>{}project title place holder</li> 
                    <li>{}project title place holder</li> 
                </ul>
                <div className='icons'>
                    <img src={require('../../assets/images/Github-icon.png')} alt='github' height='36' />
                    <img src={require('../../assets/images/LinkedIn-icon.png')} alt='linkedin' height='36' />
                    <img src={require('../../assets/images/Medium-icon.png')} alt='medium' height='34' />
                </div>
            </div>
            </StyledProjects>
        )
    }   
}