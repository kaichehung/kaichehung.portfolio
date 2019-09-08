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
                    <li className="projectLink"><Link className='category' to={`${this.props.match.url}snake`}>Snake</Link></li> 
                    <li className="projectLink"><Link className='category' to={`${this.props.match.url}B`}>Layers</Link></li> 
                    <li className="projectLink"><Link className='category' to={`${this.props.match.url}C`}>project C title place holder</Link></li> 
                    <li className="projectLink"><Link className='category' to={`${this.props.match.url}D`}>Piggy Baku</Link></li> 
                </ul>
            </div>
            


            </StyledProjectList>
        )
    }   
}                        
