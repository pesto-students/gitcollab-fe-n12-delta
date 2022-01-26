import React from 'react';

import burgerLogo from '../../images/logopharma.jpg';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;