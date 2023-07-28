import data from "../data/skills.json";
export default function Skills(){
    let printLevel = (levelshow) => {
        const box=[];
        for (let i = 0; i < levelshow; i++){
            box.push(<div className='box'></div>)
        }
        while (box.length<10){
            box.push(<div className='boxNull'></div>)
        }
        return box;
    }
return(
    <div id = 'CodingSkill' >
        <h3 className='subtitle1'>Coding Skill</h3>
        <div className='gridContainer'>
            {
                data.map((coding, index) => {
                let url = coding.imgurl;
                return (
                <div key = {'coding' + index} className = 'card' >
                    <h5 className='cardTitle'>{coding.skill}</h5>
                    <div> 
                        < img src = {require('../img/codingSkillIcon/' + url)}
                         className='cardImg' alt = {coding.skill}/>
                    </div>

                    <div className = 'flexColContainer' >
                        <div >Familiar with : </div>
                        <div className = 'levelContainer' >
                            {printLevel(coding.level)}
                        </div>
                    </div>
                </div>
                );
            })}
        </div>
    </div>)
}