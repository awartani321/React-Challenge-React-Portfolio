import React, {useState} from 'react';

import Navigation from './Navigation';

import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function Header() {
    const [menu, onChangeMenu] = useState(1);
    const renderBody = () => {
        switch(menu) {
            case 1:
                return <About />;
            case 2:
                return <Portfolio />;
            case 3:
                return <Contact />;
            case 4:
                return <Resume />;
        }
    }
    return (
        <div>
            <Navigation onChangeMenu={onChangeMenu}/>
            <div>
                { renderBody() }
            </div>
        </div>
    )
}

export default Header;