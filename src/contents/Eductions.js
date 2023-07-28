import data from "../data/educations.json";
export default function Educations(){
return (
    <div  id = 'Education' >
        <h3 className='subtitle1'>Education</h3>
            <div className='centeredSection'>
                {
                data.map((work, index) => {
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
                data.map((work, index) => {
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
    </div>)
}