import React, {Component} from 'react';
import Map from './maps/Map'

class Home extends Component{
    render(){
        return(
            <>
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <Map/>
                        </div>
                    </div>
                </header>
            </>
        );
    };
}

export default Home;