import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { StyledAbout } from './Styled';
import {skillData, educationData, experienceData} from './data'



export default class About extends Component{
    render(){
        return(
            <StyledAbout>
                <div className='aboutContainer'>
                    <div className='col1-row1'>
                        <h1 className='name'>Kai-che Hung</h1>      
                        <h3 className='brief'>I’m a cross-disciplinary front-end engineer and designer based in NYC.</h3>  
                    </div>

                    <div className='col2-row3'>
                        <div className="info">
                            <div className='infoType'>
                                <h2>Skills</h2>
                                {
                                    Object.keys(skillData).map((key)=>{
                                        return(
                                            <div className='item'>
                                                <h3>{key}</h3>
                                                {skillData[key].map((technique)=>{
                                                    return (<p className='tech'>{technique}</p>)
                                                })}
                                            </div>

                                        )
                                    })
                                }
                            </div>

                            <div className='infoType'>
                                <h2>Education</h2>
                                {
                                    educationData.map((edu)=>{
                                        return(
                                            <div className='item'>
                                                <h3>{edu.school}</h3>
                                                <p>{edu.program}</p>
                                                <p>{edu.period}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className='infoType'>
                                <h2>Experiences</h2>
                                {
                                    experienceData.map((exp)=>{
                                        return(
                                        <div className='item'>
                                            <h3>{exp.company}</h3>
                                            <p>{exp.position}</p>
                                            <p>{exp.period}</p>
                                        </div>
                                    )})
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </StyledAbout>
        )
    }   
}