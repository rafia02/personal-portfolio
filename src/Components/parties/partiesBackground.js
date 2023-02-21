import React from 'react';
import Particles from 'react-tsparticles';
import config from './config';


const partiesBackground = () => {
    return (
        <div>
            <Particles params={config}></Particles>
        </div>
    );
};

export default partiesBackground;