import data from '../data/educations.json';
import {
    useInView
} from "react-intersection-observer";
export default function Introduction(){
       const {
           ref: introductionRef,
           inView: introductionView
       } = useInView();
    return ( 
    <div id = 'aboutme'
    ref = {
        introductionRef
    }
            >
            <h3 className='subtitle1'>About me</h3>
            <div>
              <div className = 'contentText' >
                <div className = "flexRowContainer " >
                    <div>
                        <div className = {
                            introductionView ? "cityu cityUActive" : "cityu"
                        } >
                            <h3 className="cityuColor">{data[0].school} </h3>
                            <h4>{data[0].degree} </h4>
                        </div>
                        <div className = {
                            introductionView ? "ive iveActive" : "cityu"
                        } >
                            <h3 className="">{data[1].school}  </h3>
                            <h4>{data[1].degree}</h4>
                        </div>
                    </div>
                    <div className = {
                        introductionView ? "detailPerson detailPersonAction" : "detailPerson"
                    } >
                        <h4>A fresh graduate student👨‍💻</h4>
                        <div className="aboutMe">Seeking an entry-level position in the information technology industry which will utilize the organizational and communication skills developed through my industrial experience.</div>
                    </div>
                    
                </div>
              </div>
            </div>
            
          </div>)
}