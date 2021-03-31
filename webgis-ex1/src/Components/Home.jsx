import React, {Component} from 'react';
import Map3D from './maps/Map3D'
import Polygon from './maps/Polygon';
import {Dropdown, DropdownButton} from 'react-bootstrap'

class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
            map: <Map3D/>
        }
        this.handle3d = this.handle3d.bind(this)
        this.handlePoly = this.handlePoly.bind(this)
    }

    handle3d = () => {
        document.querySelector('.mapboxgl-control-container').remove();
        this.setState({map: <Map3D/>})
    }

    handlePoly = () => {
        document.querySelector('.mapboxgl-control-container').remove();
        this.setState({map: <Polygon/>})
       
    }

    render(){
        return(
            <>
                <div className="masthead">
                    <div className="container h-100">
                        <div className=" h-100 align-items-center justify-content-center text-center">
                        <h1>MapBox - WebGIS site</h1><br/>
                        <DropdownButton id="dropdown-item-button" title="Choose a map">
                            <Dropdown.Item as="button" className="3d" onClick={this.handle3d}>3D Buildings</Dropdown.Item>
                            <Dropdown.Item as="button" className="poly" onClick={this.handlePoly}>Draw Polygon</Dropdown.Item>
                            <Dropdown.Item as="button">Something else</Dropdown.Item>
                        </DropdownButton>
                        <br/>
                        <div id="map" className="map-container">
                            {this.state.map}
                        </div>
                        <br/>
                        {"Created by Yehonatan Hen & Ariel Turchinsky"}
                        </div>
                    </div>
                </div>
            </>
        );
    };
}

export default Home;