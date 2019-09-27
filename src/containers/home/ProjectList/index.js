import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { StyledProjectList } from './Styled';




export default class ProjectList extends Component{
    render(){
        return(
            <StyledProjectList>
            {/* use map function instead*/}
            <div className='content'>
                <ul>
                    <li className="projectTitle"><Link className='category' to={`${this.props.match.url}snake`}>Snake</Link></li> 
                    <li className="projectTitle"><Link className='category' to={`${this.props.match.url}piggy_baku`}>Piggy Baku</Link></li> 
                    <li className="projectTitle"><Link className='category' to={`${this.props.match.url}nyc_cimre_data_vis`}>NYC Crime Data Visualization </Link></li> 
                    <li className="projectTitle"><Link className='category' to={`${this.props.match.url}world_loader`}>World Loader</Link></li> 
                </ul>
            </div>
            


            </StyledProjectList>
        )
    }   
}                        