import React from 'react';
import './Header.css';

class Header extends React.Component {

    render() {
        return (
            <div className="app-header">
                <h2><span style={{color:"rgb(2,162,206)"}}>React</span> News</h2>
            </div>
        );
    }
}

export default Header;