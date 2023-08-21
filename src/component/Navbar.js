/**
    * @description      : 
    * @author           : admin
    * @group            : 
    * @created          : 08/05/2023 - 11:03:29

    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 08/05/2023
    * - Author          : admin
    * - Modification    : 
**/
import React from 'react';
import '../css/navBar.css';
import {
    useTheme,
    useThemeUpdate
} from '../hook/ThemeContext';
import Theme from "./Theme"
            
export default function Navbar() {
    const dark = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: dark ? 'var(--dark-white)' : 'var(--white)',
        color: dark ? 'var(--white)' : 'var(--black)'
    }
    
    if (dark) {
        document.body.style.backgroundColor = "var(--dark-smokeWhite)";
        document.body.style.color = "var(--dark-black)";
    }else{
        document.body.style.backgroundColor = "var(--smokeWhite)";
        document.body.style.color = "var(--black)";
    }

    return(
    <div className = "navbar"
        style = {themeStyles} >
        <div className='leftNavItem'>
            <div>
                <a href="#Education">EDUCATION</a>
            </div>
            <div>
                <a href = "#Experience" > EXPERIENCE </a>
                
            </div>
            <div>
                <a href = "#CodingSkill" > SKILL </a>
                
            </div>
            <div>
                <a href = "#SideProject" > SIDEPROJECT </a>
                
            </div>
        </div>
        <Theme />
        
        
    </div>
    );
}
