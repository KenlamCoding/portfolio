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
class Experience {
  constructor() {
    this.works = [{
      "title": "Tuition teacher ",
      "employer": "The Methodist Lee Wai Lee College",
      "start":"2019",
      "end":"2019",
      "descriptions": ["Provide Mathematics tutorial to 8-10 students."]
    }, {
      "title": "Term Analyst/Programmer",
      "employer": "Hong Kong Housing Authority",
      "start": "Sep, 2021",
      "end": "Jun, 2022",
      "descriptions": ['Network Team Network security Management of Network servers','Offer aid about network security controls for ISO auditing.','Programming for handling system logs with power-shell script']
    }, 
  ]
  }
  printExperience=()=>{
    return(<div>
      {
        this.works.map((work,index)=>{
                  return(
                  <div key = {
                    'work' + index
                  }
                  className = 'contentText' >
                    <div className='flexRowContainer'>
                      <h5 className='subtitle2'>{work.title} ({work.start}-{work.end})</h5>
                      </div>
                    
                    <div className='description'>
                      {
                        work.descriptions.map((d)=>{
                          return (<div>{d}</div>)
                        })
                      }
                    </div>
                    <div className='companyName'>{work.employer}</div>
                    
                  </div>
                  );
                })
      }
    </div>);
  } 
}

export default Experience;