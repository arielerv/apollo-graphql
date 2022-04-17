import React from 'react';

import {Ring} from './styled';

const Loader = () => (
    <Ring data-testid="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </Ring>
);

export default Loader;
