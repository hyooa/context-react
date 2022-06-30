import React, {useContext} from 'react';
import {ThemeContext} from '../Context/ThemeContext';

const Footer = () => {
    const {isDark,setIsDark} = useContext(ThemeContext);

    const onClickDark = () => {
        setIsDark(!isDark) // isDark 아닐때
    }
    return (
        <div className={ isDark ? 'footer dark' : 'footer' }>
            <button onClick={onClickDark}>다크모드</button>
        </div>
    );
};

export default Footer;