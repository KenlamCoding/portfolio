/**
 * @description      : 
 * @author           : admin
 * @group            : 
 * @created          : 05/05/2023 - 09:30:49
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 05/05/2023
 * - Author          : admin
 * - Modification    : 
 **/
import React from 'react';
class Education {
  constructor() {
    //1-5  
    this.studying=[
       {
       school: 'City University of Hong Kong',
       degree: 'Bachelor of Science in Computer Science',
       start: 'Sep, 2020',
       end: 'Jun, 2023',
       description: 'Taking up official position in the student societies, creating a website in order to giving information about the student societies to members and offering few websites to handle the events of orientation day and orientation night. Finished the internship in Housing Authority.',
       iconURL: '../img/cityu.png',
       iconShortcut: 'cityu.png',
       gpa: 'Graduated with GPA (2.55/4).'
     }, {
       school: 'Hong Kong institue of Vocational Education',
       degree: 'Higher Diploma in Software Engineering Programme',
       start: 'Sep, 2019',
       end: 'May, 2020',
       description: 'Completed final-year project "Content Managenebts System for Aviation" which is a content management system for china aircraft services limited. I am in change of the frondend. ',
       iconURL: '../img/ive.png',
       iconShortcut: 'ive.png',
       gpa: 'Graduated with GPA(3.77/4)'
     },{
       school: 'The Methodist Lee Wai Lee College',
       degree: 'SECONDARY SCHOOL',
       start: 'Sep,2012',
       end: 'May,2019',
       description: '',
       iconURL:'../img/lwlc.jpg',
       iconShortcut: 'lwlc.jpg',
       gpa: 'DSE: 324444'
     },
    ]
  }
  getStudying = () => {
    return(
      <div className='centeredSection'>
        {
         this.studying.map((work,index) => {
                  let url = work.iconShortcut;
                  return(
                    <div className = 'centered' >
                      <h4 className='centeredTitle'>{work.degree }</h4>
                      <div className='centeredResult'>{work.gpa}</div>
                     
                    </div>
                  );
                })
        } 
        <div className = 'centeredHeroImg' > 
         {
         this.studying.map((work,index) => {
                  let url = work.iconShortcut;
                  return(
                    <>
                      <img src = {
                        require('../img/educationIcon/' + url)
                      }
                      className = 'centeredHeroImg'
                      alt = {
                        work.degree
                      }
                      />
                    </>
                  );
                })
        } 
        </div>
      </div>
    )
    
  }
}

export default Education;