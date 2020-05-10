import React from 'react';

function Footer(){

    return(
        <footer style={FooterStyle}>
        </footer>
    )
}

const FooterStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    bottom:0,
    position: 'fixed',
    width: '-webkit-fill-available'
}

export default Footer;