import React, {Component} from 'react';
import Map3D from './maps/Map3D'
import Polygon from './maps/Polygon';
import Distance from './maps/Distance';
import {Dropdown, DropdownButton} from 'react-bootstrap'

class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
            map: <Polygon/>
        }
        this.handle3d = this.handle3d.bind(this)
        this.handlePoly = this.handlePoly.bind(this)
        this.handleDistance = this.handleDistance.bind(this)
        this.removeContainer = this.removeContainer.bind(this)
    }

    removeContainer = () => {
        if(document.querySelector('.mapboxgl-control-container')){
            document.querySelector('.mapboxgl-control-container').remove();
        }
    }

    handle3d = () => {
        this.removeContainer()
        this.setState({map: <Map3D/>})
    }

    handlePoly = () => {
        this.removeContainer()
        this.setState({map: <Polygon/>})
       
    }

    handleDistance = () => {
        this.removeContainer()
        this.setState({map: <Distance/>})
       
    }

    render(){
        return(
            <>
                <div className="masthead">
                    <div className="container h-100">
                        <div className=" h-100 align-items-center justify-content-center text-center">
                        <h1>MapBox - WebGIS site</h1><br/>
                        <DropdownButton id="dropdown-item-button" title="Choose a feature">
                            <Dropdown.Item as="button" className="poly" onClick={this.handlePoly}>Draw Polygon</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={this.handleDistance}>Measure Distance</Dropdown.Item>
                            <Dropdown.Item as="button" className="3d" onClick={this.handle3d}>3D Buildings</Dropdown.Item>
                        </DropdownButton>
                        <br/>
                        <div id="map" className="map-container">
                            {this.state.map}
                        </div>        
                        <br/>
                        <span style={{color:'white'}}>{"Created by Yehonatan Hen & Ariel Turchinsky"}</span>
                        </div>
                    </div>
                </div>
            </>
        );
    };
}

export default Home;