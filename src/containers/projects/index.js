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
                    <li className="projectLink"><Link className='category' to="/A">project A title place holder</Link></li> 
                    <li className="projectLink"><Link className='category' to="/B">project B title place holder</Link></li> 
                    <li className="projectLink"><Link className='category' to="/C">project C title place holder</Link></li> 
                    <li className="projectLink"><Link className='category' to="/D">project D title place holder</Link></li> 


                </ul>
            </div>
            </StyledProjects>
        )
    }   
}                        
