/**
    * @description      : 
    * @author           : admin
    * @group            : 
    * @created          : 08/05/2023 - 11:03:29
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 08/05/2023
    * - Author          : admin
    * - Modification    : 
**/
import React from 'react';
import '../css/navBar.css';
//import Person from '../model/Person';
//const person=new Person();
function Navbar() {
    return(
    <div className="navbar">
        <div className='leftNavItem'>
            <div>
                <a href="#Education">EDUCATION</a>
            </div>
            <div>
                <a href = "#Experience" > EXPERIENCE </a>
                
            </div>
            <div>
                <a href = "#CodingSkill" > CODING SKILL </a>
                
            </div>
            <div>
                <a href = "#SideProject" > SIDE PROJECT </a>
                
            </div>
        </div>
        <div className = 'rightNavItem'>
            
        </div>
        
    </div>
    );
}
export default Navbar;