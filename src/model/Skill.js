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
class Skill {
  constructor() {
    //1-5
    this.codings = [
     {
       skill: 'HTML5',
       imgurl: 'html5.png',
       level: 8
     }, {
       skill: 'CSS',
       imgurl: 'css.png',
       level: 8
     }, {
       skill: 'Javascript',
       imgurl: 'javascript.jpg',
       level: 7
     }, {
       skill: 'Bootstrap',
       imgurl: 'bootstrap.jpg',
       level: 7
     }, {
       skill: 'jQuery',
       imgurl: 'jquery.png',
       level: 7
     },  {
       skill: 'React.js',
       imgurl: 'reactjs.png',
       level: 6
     }, {
       skill: 'Java',
       imgurl: 'java.png',
       level: 7
     }, {
       skill: 'PHP',
       imgurl: 'php.jpg',
       level: 7
     }, {
       skill: 'Python',
       imgurl: 'python.png',
       level: 7
     }, {
       skill: 'Powershell',
       imgurl: 'powershall.png',
       level: 5
     }, {
       skill: 'jsp',
       imgurl: 'jsp.png',
       level: 4
     }, {
       skill: 'c++',
       imgurl: 'cpp.png',
       level: 4
     }, {
       skill: 'MySQL',
       imgurl: 'mysql.png',
       level: 7
     }, {
       skill: 'Junit',
       imgurl: 'junit.png',
       level: 6
     }
    ]; 
    this.language = [{
        skill: 'Mandarin',
        level: 'fluent'
      }, {
        skill: 'Cantonese',
        level: 'fluent'
      }, {
        skill: 'English',
        level: 'fair'
      },
    ];
    this.typings = [{
      typeLanguage: 'Chinese',
      wpm: 25
    }, {
      typeLanguage: 'English',
      wpm: 35
    }];
  }
  print=()=>{
    return(
      <>
      {
        this.codings.map((coding, index) => {
          let url = coding.imgurl;
        return (
          <div key = {
            'coding' + index
          }
          className = 'card' >
            <h5 className='cardTitle'>{coding.skill}</h5>
            <div> 
                < img src = {
                  require('../img/codingSkillIcon/' + url)
                } className='cardImg'
                alt = {
                  coding.skill
                }
                />
            </div >

            < div className = 'flexColContainer' >
              <div >Familiar with : </div>
              <div className = 'levelContainer' >
                  {this.printLevel(coding.level)}
              </div>
            </div>
          </div>
        );
      })}
      </>
    )
  }
  printLanguage=()=>{
    return(
      <div>
      {
        this.language.map((alanguage, index) => {
          
        return (
          <div key={index}>
            <div>name: {alanguage.skill}</div>
            <div>country: {alanguage.level}</div>
            <hr />
          </div>
        );
      })}
      </div>
    )
  }
  printTyping= () => {
    return(
      <div>
      {
        this.typings.map((typing, index) => {
        return (
          <div key={index}>
            <h2>name: {typing.typeLanguage}</h2>
            <h2>country: {typing.wpm}</h2>
          </div>
        );
      })}
      </div>
    )
  }
  printLevel=(levelshow)=>{
    const box=[];
    for (let i = 0; i < levelshow; i++){
      box.push(<div className='box'></div>)
    }
    while (box.length<10){
      box.push(<div className='boxNull'></div>)
    }
    return box;
  }
}
export default Skill;