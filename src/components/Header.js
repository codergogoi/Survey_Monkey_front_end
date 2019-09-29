import React, { Component } from 'react';


class Header extends Component{

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo"> Survey Monkey</a>
                    <ul className="right">
                        <li>
                            <a> Login in With Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}

export default Header;