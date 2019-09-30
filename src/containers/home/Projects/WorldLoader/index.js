import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { directive } from '@babel/types';
import {StyledWorldLoader} from './Styled'
import {StyledProjects} from '../Styled'

export default class WorldLoader extends Component {

    render(){
        return(
            <StyledProjects>
            <StyledWorldLoader>
                <div className='head'>
                    <div className='flex-container'>
                    <div className='flex-row'>
                        <h1 >World Loader</h1>
                        <h2 className='title-h2'>Machine Learning</h2>       
                    </div>
                    <div className='flex-row'>             
                        <img id='profile' src={require('../../../../assets/images/worldLoader/profile.png')} alt='' />
                        <p className='intro'>World Loader is a research project on the applying machine learning 
                        into 3D production pipeline to accelerate workflow. <br/><br/>
                        It aim at reconstruct a 3D scene from a still 2D image as input.
                        It does object detection to parse information from 2D input images,
                        than it composes a new 3D scene using independent object models 
                        so creators can edit, swap or delete any of the object models afterward.
                        </p>
                    </div>
                    </div>
                </div> 
                <div className='body'>
                    <section className='useScenario-section'>
                            <h2>Use Scenario</h2>
                            <p>In the 3D production pipeline, there are lots of time we have to work in between 
                               2D and 3D resource, especially in the matt painting and composition. It's a pain 
                               that we human have to deal with all of those assets in a form of pixels, but ,
                               meaningful objects. With the object recognotion brought by machine learning, there 
                               are chances we can make creators do creative work and computer deal with trivial works.</p> 
                            <div className='flex-container iframeWrapper'>
                                <iframe title='mattPainting'  width="500" height="280" src="https://www.youtube.com/embed/4uwHCrTagpQ?start=471" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe title='compositing' width="500" height="280" src="https://www.youtube.com/embed/kq5Snel0fcw?start=1349" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                    </section>

                    <section className='systemDesign-section'>
                        <h2>System Design</h2>                    
                        <img id='systemDiagram' src={require('../../../../assets/images/worldLoader/systemDiagram.png')} alt='' />
                        <div className='flex-container systemTechniqueContainer'>
                            <div className='systemTechnique-Wrapper'>
                                <h3>Detectron</h3>
                                <img className='systemTechnique' src={require('../../../../assets/images/worldLoader/detectron.jpg')} alt='' />
                            </div>
                            <div className='systemTechnique-Wrapper'>
                                <h3>DeepBox</h3> 
                                <img className='systemTechnique' src={require('../../../../assets/images/worldLoader/deepbox.png')} alt='' />
                            </div>
                            <div className='systemTechnique-Wrapper'>
                                <h3>Depth Estimation</h3>   
                                <img className='systemTechnique' src={require('../../../../assets/images/worldLoader/depthEstimation.png')} alt='' />
                            </div>
                        </div>
                        <p className='system-description-p'>The technical implementation is diveided into two part, the interface and the core machine learning part. The interface 
                           is written in C# as an Unity Engine Plugin. The machine learning part is made of three models, the Detectron, Depth Estimation 
                           and the Deepbox. Detectron executes object detection in 2D images and determines the x and y coordinates. Depth estimation 
                           determines the Z coordinate. and DeepBox draws the 3D bounding box for each object which feeds the XYZ rotation value to unity. 
                        </p>
                    </section>

                    <section className='prototype-section'>
                        <h2>Prototype & User Test</h2>
                        <div className='prototypeContainer'>     
                            <img className='prototype-gif' src={require('../../../../assets/images/worldLoader/prototype00.gif')} alt='' />
                            <img className='prototype-gif' src={require('../../../../assets/images/worldLoader/prototype01.gif')} alt='' />
                        </div>
                        <p className=''>In the user testing with SVA animation students, I collect a couple of insightful feedback from them.</p>
                        <li className='prototype-li'>It will be helpful even it’s only function was object recognition and cropping with 2D images, because it can be used for 2D animations.</li>
                        <li className='prototype-li'>It should be able to offer more detail control over its functionalities, such as deselect objects or allow users to set a threshold for detection.</li>
                    </section>

                    <section className='research-section'>
                        <h2>Research</h2>
                        <div className='research-wrapper'>
                            <h3>Volume</h3>  
                            <div className='flex-container'>
                                <img className='research' src={require('../../../../assets/images/worldLoader/volume.jpg')} alt='' />
                                <p className='research-description-p'>Volume by ITP alumni Or Fleisher is a machine learning cloud service which transfers a 2D picture into a 3D mesh.</p>
                            </div>
                        </div>
                        <div className='research-wrapper'>
                            <h3>Soccer on the tablet</h3> 
                            <div className='flex-container'>
                                <iframe title='soccerOnTheTablet' width="560" height="315" src="https://www.youtube.com/embed/eRGAB4QBS6U?start=3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
                                <p className='research-description-p'>Soccer on the tablet was created in 2018 by a research team from UW. Their 
                                Machine Learning model extracts a lot of information from an input video, including camera calibration, player 
                                detection, post estimation, segmentation, mesh generation, and depth estimation. The way this team collect data to 
                                train their model is brilliant, they use the FIFA video game as the data source, which means they have infinity 
                                data to improve the result.</p>
                            </div>
                        </div>
                        <div className='research-wrapper'>
                            <h3>Holistic 3D Scene Parsing and Reconstruction from a Single RGB Image </h3>
                            <div className='flex-container'>
                                <img className='research' src={require('../../../../assets/images/worldLoader/3DSceneParsingReconstruction00.png')} alt='' />
                                <p className='research-description-p'>Holistic 3D Scene Parsing and Reconstruction from a Single RGB Image created 
                                by UCLA in 2018. They created a framework to jointly parse a single 2D, RGB image and reconstruct a holistic 3D 
                                configuration composed by a set of CAD models using a stochastic grammar model. (which is a kind of Nature Language 
                                Processing model)</p>
                            </div>
                        </div>
                    </section>
                    <section className='next-step'>
                        <h2>Next Step</h2> 
                        <h3>This project right now is still working in progress.</h3>
                    </section>
                </div>
            </StyledWorldLoader>
            </StyledProjects>
        )
    }

}