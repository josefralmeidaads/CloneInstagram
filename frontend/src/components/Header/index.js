import React from 'react';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import camImg from '../../assets/camera.svg';

const Header = () => {
    return(
        <header id="main-header">
            <div className="header-content">
                <img src={logoImg} alt="logo" />
                <img src={camImg} alt="Enviar publicação" />
            </div>
        </header>
    )
}

export default Header;