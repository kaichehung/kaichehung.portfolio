import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { StyledArticles } from './Styled';


export default class Articles extends Component{
    render(){
        return(
            <StyledArticles>
                <div className=''>
                    <p>place holder</p>
                </div>
            </StyledArticles>
        )
    }   
}