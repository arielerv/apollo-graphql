import React from 'react';

import {Container} from './styled';

const Header = () => (
    <Container>
        <img
            src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
            alt="logo"
            data-testid="logo-image"
        />
    </Container>
);

export default Header;
