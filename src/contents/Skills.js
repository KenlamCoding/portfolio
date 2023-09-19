import data from "../data/skills.json";
import { useInView } from "react-intersection-observer";
import '../css/skill.css';
export default function Skills(){
    const {
        ref: skillRef,
        inView: skillView
    } = useInView();
    let printLevel = (skill,levelshow) => {
        const box=[];
        let nullBoxIndex = 0;
        for (let i = 0; i < levelshow; i++){
            box.push(<div className='box' key={"skill"+"box"+i}></div>)
        }
        while (box.length<10){
            box.push(<div className='boxNull' key={"skill"+"null"+(nullBoxIndex)}></div>)
            nullBoxIndex++;
        }
        return box;
    }
return(
    <div id = 'CodingSkill' >
        <h3 className='subtitle1' ref={skillRef}>Coding Skill</h3>
        <div className='gridContainer'>
            {
                data.map((coding, index) => {
                return (
                <div className = 'card' key = {coding.skill} >
                     <h5 className='cardTitle'>{coding.skill}</h5>
                    <div> 
                        <img src = {require('../img/codingSkillIcon/' + coding.imgurl)}
                         className='cardImg' alt = {coding.skill}/>
                    </div>
                    
                    <div className = 'flexColContainer' >
                        <div className="cardTitle">Familiar with : </div>

                        <div  className = {
                            skillView ?'levelContainer showLevel': 'levelContainer'
                        } >
                            {printLevel(coding.skill,coding.level)} 
                        </div>
                    </div> 
                </div>
                );
            })}
        </div>
    </div>)
}