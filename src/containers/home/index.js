import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import projects from '../projects'

// import {
// } from './actions';
 import { StyledHome } from './Styled';
import Projects from '../projects';
// import {
// } from './selectors';

class Home extends Component {
    static propTypes = {
        //snake: PropTypes.instanceOf(Map),
    }
    static defaultProps = {
        //snake: Map(),
        //handleOnSetSnakeMoving: () => { },
    }
    componentDidMount(){}
    componentWillUnmount(){}
    componentDidUpdate(){}

    //eventHandlers.....
    render(){
        // const {
        //     //snake,
        // } = this.props;

        return(
            <StyledHome>
                
                <div className='container'>
                    <div></div>
                    <div></div>
                    <div className='header'>
                        <Link className='' to="/projects">PROJECTS</Link>
                        <Link className='' to="/articles">ARTICLES</Link>
                        <Link className='' to="/about">ABOUT</Link>
                    </div>
                    <div></div>
                    <div></div>
                    {/* <Route path="/" exact component={Projects} />
                    <Route path="/about/" component={Articles} />
                    <Route path="/users/" component={About} /> 
                    
                    <div></div>
                    */}
                    <Projects />

                </div>

                <div className='bg'></div>
            </StyledHome>
        );
    }

}

export default Home;

// const mapStateToProps = createStructuredSelector({
//     //snake: makeSelectSnake()
// });

// const mapDispatchToProps = dispatch => ({
//     //handleOnSetSnakeMoving: () => dispatch(setSnakeMoving()),
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Home);