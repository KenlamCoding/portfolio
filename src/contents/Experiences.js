import data from "../data/experiences.json"
export default function Experiences(){
    return(
    <div  id = 'Experience' >
        <h3 className='subtitle1'>Experience</h3>
            <div className = 'flexRowContainer' >
                {
                    data.map((work, index) => {
                            return(
                            <div key = {'work' + index} className = 'contentText experienceItem' >
                                <div className='flexRowContainer'>
                                <h5 className='subtitle2'>{work.title}</h5>
                                <h6>({work.start}-{work.end})</h6>
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
            </div>
          </div>)
}