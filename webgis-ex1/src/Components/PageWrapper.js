import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PageWrapper extends Component{
    render(){
        return(
            <>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div className="container">
                        <Link className="navbar-brand js-scroll-trigger" to="/">Start Bootstrap</Link>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto my-2 my-lg-0">
                                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/about">About</Link></li>
                                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/services">Services</Link></li>
                                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/portfolio">Portfolio</Link></li>
                                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </>
        )
    }
}

export default PageWrapper;
