
import React, { Component } from 'react';
import {StyledNYCCimreDataVis} from './Styled'
import {StyledProjects} from '../Styled'

/*
////Observable Data Visualization Integration ////
//https://observablehq.com/@kaichehung/crimal-in-nyc-from-2018
*/

import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@kaichehung/untitled";
const runtime = new Runtime();

export default class NYCCimreDataVis extends Component {
    // chartRef = React.createRef();
    // pieRef = React.createRef();

    componentDidMount() {
        runtime.module(notebook, Inspector.into('#dataVisContainer'));
    }
    
    render(){
        return(
            <StyledProjects>
            <StyledNYCCimreDataVis>
                <div className='head'>
                    <h1>2018 NYC Crime <br/> 
                        Data Visualizations  
                    </h1>
                    <h2>D3 Data Vis</h2>
                    <div id='dataVisContainer'>
                        {/* <div ref={this.chartRef}></div>
                        <div ref={this.pieRef}></div> */}
                    </div>
                </div>  
            </StyledNYCCimreDataVis>
            </StyledProjects>
        )
    }

}