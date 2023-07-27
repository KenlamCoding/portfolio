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
import Person from '../model/Person';
import Skill from '../model/Skill';
import Education from '../model/Education';
import Experience from '../model/Experience';
import SideProject from '../model/SideProject';
import Footer from './Footer';
import '../css/layout.css';

const skill = new Skill();
const person = new Person();
const education = new Education();
const experience = new Experience();
const sideProject = new SideProject();

function Content() {
  return (
    <div className="content">
        <main >
          {
            /*Img show Names and slogan
              Design : Img include words
            */
          }
          <div className='imgShow'>
            <section>
                <h1  className = '' >
                {
                  person.firstName + ' '
                  +person.lastName
                }
              </h1>
              <h2 >A web developer</h2>
            </section>
                  
            </div>
          {
            /*
            A paragraph with words 
            */
          }
          <div id = 'aboutme' >
            <h3 className='subtitle1'>About me</h3>
            <div>
              <div className = 'contentText ' >
                {person.introduce()}
              </div>
            </div>
            
          </div>
          {
            /*
            grid container with card div
            */
          }
          <div  id = 'Education' >
            <h3 className='subtitle1'>Education</h3>
            <div className = '' >
              {
                education.getStudying()
              }
            </div>
          </div>
          {
            /*
            container with div
            */
          }
          <div  id = 'Experience' >
            <h3 className='subtitle1'>Experience</h3>
            <div className = '' >
                {
                  experience.printExperience()
                }
            </div>
          </div>
          {
            /*
            grid container with card div
            */
          }
          <div id = 'CodingSkill' >
            <h3 className='subtitle'>Coding Skill</h3>
            <div className='gridContainer'>{
              skill.print()
            }</div>
            
          </div>
          <div className='imgShow'>
            <section>
              <h4>Coding is inspired by life</h4>
            </section>
              
          </div>
          {
            /*
            grid container with card div
            */
          }
          <div  id = 'SideProject' >
            <h3 className='subtitle1'>SideProject</h3>
            <div className='gridContainer'>
                {
                  sideProject.printSideProject()
                }
            </div>
            
          </div>
          
          <Footer/>
        </main>
        
    </div>
  );
}

export default Content;
