import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { StyledProjectList } from './Styled';




export default class ProjectList extends Component{
    render(){
        return(
            <StyledProjectList>
            {/* use map function instead*/}
            <div className='content'>
                <ul>
                    <li className="projectTitle" key='world'><Link className='category' to={`${this.props.match.url}world_loader`}>World Loader</Link></li> 
                    <li className="projectTitle" key='snake'><Link className='category' to={`${this.props.match.url}snake`}>Snake</Link></li> 
                    <li className="projectTitle" key='piggy'><Link className='category' to={`${this.props.match.url}piggy_baku`}>Piggy Baku</Link></li> 
                    <li className="projectTitle" key='crime'><Link className='category' to={`${this.props.match.url}nyc_cimre_data_vis`}>NYC Crime Data Visualization </Link></li> 
                </ul>
            </div>
            


            </StyledProjectList>
        )
    }   
}                        
