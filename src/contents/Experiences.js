import data from "../data/experiences.json"
import {
    useInView
} from "react-intersection-observer";
export default function Experiences(){
    const {
        ref: experienceRef,
        inView: experienceAnimation
    } = useInView();
    return(
    <div id = 'Experience'
    ref = {
        experienceRef
    } >
        <h3 className='subtitle1'>Experience</h3>
            <div className = 'flexRowContainer' >
                {
                    data.map((work, index) => {
                            return(
                            <div div key = {
                                'work' + index
                            }
                            className = {
                                experienceAnimation ? 'contentText experienceItem fadeInTop' : 'contentText experienceItem'
                            } >
                                <div className='flexRowContainer' >
                                    <h5 className='subtitle2'>{work.title}</h5>
                                    <h6>({work.start}-{work.end})</h6>
                                </div>
                                <div className='description'>
                                {
                                    work.descriptions.map((d,dIndex)=>{
                                    return (<div key={work.title+dIndex}>{d}</div>)
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