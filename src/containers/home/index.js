import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group'

//Components
import ProjectList from './ProjectList'
import Articles from './Articles'
import About from './About'
import Snake from './Projects/Snake'
import PiggyBaku from './Projects/PiggyBaku'
import NYCCimreDataVis from './Projects/NYCCimreDataVis'
import WorldLoader from './Projects/WorldLoader'
import { StyledHome } from './Styled';
import BgComponent from '../components/BgComponent'


class Home extends Component {
    componentDidMount(){
        console.log(this.props.location)
    }
    componentWillUnmount(){}
    componentDidUpdate(){}

    render(){
        const routes = [
            {
                path: "/",
                exact: true,
                component: ProjectList,
            },
            // {
            //     path: "/articles/",
            //     exact: false,
            //     component: Articles,
            // },
            {
                path: "/about/",
                exact: false,
                component: About,
            },

            //Projects 
            {
                path: "/world_loader",
                exact: false,
                component: WorldLoader,
            },
            {
                path: "/snake",
                exact: false,
                component: Snake,
            },
            {
                path: "/piggy_baku",
                exact: false,
                component: PiggyBaku,
            },
            {
                path: "/nyc_cimre_data_vis",
                exact: false,
                component: NYCCimreDataVis,
            },

        ];
        const footerSNS = [
            {
                url:"https://github.com/kaichehung",
                icon:require("../../assets/images/Github-icon.png"),
                alt:"github",
                height:"36",
                index:'g'
            },
            {
                url:"https://www.linkedin.com/in/kai-hung-9a81a8183/",
                icon:require("../../assets/images/LinkedIn-icon.png"),
                alt:"linkedin",
                height:"36",
                index:'l'
            },
            {
                url:"https://medium.com/@kaichehung",
                icon:require("../../assets/images/Medium-icon.png"),
                alt:"medium",
                height:"34",
                index:'m'
            }
        ]
        
        return(
            <StyledHome>                
                <div className='container'>
                    <header className='header'>
                        <Link  to="/">PROJECTS</Link>
                        {/* <Link  to="/articles">ARTICLES</Link> */}
                        <Link  to="/about">ABOUT</Link>
                    </header>

                    <div className='projectsTitleColumn'>
                    <TransitionGroup>
                        <Switch>
                            {routes.map(({path ,exact ,component:Component },index)=>(
                                <Route key={index} path={path} exact={exact}>
                                    {({match})=>(
                                            <CSSTransition
                                            in={match != null}
                                            timeout={300}
                                            classNames="page"
                                            unmountOnExit
                                            >   
                                            <div className="page" >
                                                <Component match={match}/>
                                            </div>
                                            </CSSTransition>  
                                    )}
                                </Route>
                                ))}
                        </Switch>
                    </TransitionGroup>        
                    </div>

                    <footer>
                        {footerSNS.map((sns)=>(
                            <a href={sns.url} target="_blank" key={sns.index}>
                                <img className ='snsIcon' src={sns.icon} alt={sns.alt} height={sns.height} />
                            </a>
                        ))}
                    </footer>
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