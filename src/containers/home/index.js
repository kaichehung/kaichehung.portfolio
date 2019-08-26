import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Projects from '../Projects'
import Articles from '../Articles'
import About from '../About'
import A from '../project/A'
import B from '../project/B'
import C from '../project/C'
import D from '../project/D'
import { StyledHome } from './Styled';
import BgComponent from '../components/BgComponent'

// import {
// } from './actions';
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
                    <div className='header'>
                        <Link className='category' to="/">PROJECTS</Link>
                        <Link className='category' to="/articles">ARTICLES</Link>
                        <Link className='category' to="/about">ABOUT</Link>
                    </div>

                    <div className='projectsTitle'>
                        <Switch>
                            <Route path="/" exact component={Projects} />
                            <Route path="/articles/" component={Articles} />
                            <Route path="/about/" component={About} />
                            
                            <Route path="/A" component={A} />
                            <Route path="/B" component={B} />
                            <Route path="/C" component={C} />
                            <Route path="/D" component={D} />

                        </Switch>    
                    </div>

                    <div className='icons'>
                        <a href="https://github.com/kaichehung" target="_blank">
                            <img src={require('../../assets/images/Github-icon.png')} alt='github' height='36' />
                        </a>
                        <a href="https://www.linkedin.com/in/kai-hung-9a81a8183/" target="_blank">
                            <img src={require('../../assets/images/LinkedIn-icon.png')} alt='linkedin' height='36' />
                        </a>
                        <a href="https://medium.com/@kaichehung" target="_blank">
                            <img src={require('../../assets/images/Medium-icon.png')} alt='medium' height='34' />
                        </a>
                    </div>
                </div>

                <BgComponent/>
                {/* <div className='bg'></div> */}
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