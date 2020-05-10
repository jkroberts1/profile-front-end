import React from 'react';

function Header(){

    return(
        <header style={headerStyle}>
            <h1>Profiles</h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    width: '-webkit-fill-available'
}

export default Header;