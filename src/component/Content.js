/**
    * @description      : 
    * @author           : admin
    * @group            : 
    * @created          : 05/05/2023 - 08:41:27
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/05/2023
    * - Author          : admin
    * - Modification    : 
**/
import React from 'react';
import '../css/layout.css';
import '../css/aboutme.css';

import Banner from '../contents/Banner';
import Introduction from '../contents/Introduction';
import Eductions from '../contents/Eductions';
import Experiences from '../contents/Experiences';
import Skills from '../contents/Skills';
import SideProjects from '../contents/SideProjects';
import Footer from './Footer';

function Content() {
  return (
    <div className="content">
        
        <main >
          <Banner />
          <Introduction/>
          <Eductions/>
          <Experiences/>
          <Skills/>
          <SideProjects/>
          <Footer/>
        </main>
        
    </div>
  );
}

export default Content;
