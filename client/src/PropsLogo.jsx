import React from 'react';
import logo from './imgs/CMYK-Red-Black_Small_GeneralAssembly-Stacked.png'


const PropsLogo = props => {
    return (
        <React.Fragment>
        <header className="PropsLogoText"><h1>Props</h1></header>
        <img className="GeneralAssemblyLogo" src={logo} alt="Logo" />
        </React.Fragment>
    )

}

export default PropsLogo;