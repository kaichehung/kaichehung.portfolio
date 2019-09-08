import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

//Components
import ProjectList from './ProjectList'
import Articles from './Articles'
import About from './About'
import Snake from './Projects/Snake'
import B from './Projects/B'
import C from './Projects/C'
import D from './Projects/D'
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

    render(){
        // const {
        //     //snake,
        // } = this.props;
        const navRoutes = [
            {
                path: "/",
                exact: true,
                component: ProjectList,
            },
            {
                path: "/articles/",
                exact: false,
                component: Articles,
            },
            {
                path: "/about/",
                exact: false,
                component: About,
            },
        ];                
        const projectsRoutes = [
            {
                path: "/snake",
                exact: false,
                component: Snake,
            },
            {
                path: "/B",
                exact: false,
                component: B,
            },
            {
                path: "/C",
                exact: false,
                component: C,
            },
            {
                path: "/D",
                exact: false,
                component: D,
            },
        ];

        return(
            <StyledHome>                
                <div className='container'>
                    <div className='header'>
                        <Link to="/">PROJECTS</Link>
                        <Link to="/articles">ARTICLES</Link>
                        <Link to="/about">ABOUT</Link>
                    </div>

                    <div className='projectsTitle'>
                        <Switch>

                            {navRoutes.map(({path ,exact ,component},index)=>(
                                <Route key={index} path={path} exact={exact} component={component} />
                                ))}
                            {projectsRoutes.map(({path ,exact ,component:Component },index)=>(
                                <Route key={index} path={path} exact={exact}>
                                    {({match})=>(
                                    <TransitionGroup>
                                        <CSSTransition
                                            in={match != null}
                                            timeout={300}
                                            classNames="page"
                                            unmountOnExit
                                            >
                                            <div className="page">
                                                <Component />
                                            </div>
                                        </CSSTransition>
                                    </TransitionGroup>
                                    )}
                                </Route>
                                ))}
                        </Switch>    
                    </div>



        {/* {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
        ))} */}

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