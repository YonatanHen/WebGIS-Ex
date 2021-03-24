import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <>
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-lg-10 align-self-end">
                                <h1 className="text-uppercase text-white font-weight-bold">Your Favorite Source of Free Bootstrap Themes</h1>
                                <hr className="divider my-4" />
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <p className="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                            <Link className="btn btn-primary btn-xl js-scroll-trigger" to="/about">Find Out More</Link>
                        </div>
                    </div>
                    </div>
                </header>
            </>
        );
    };
}

export default Home;