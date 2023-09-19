import { useEffect,useState } from "react";
import data from "../data/educations.json";
import { useInView } from "react-intersection-observer";

export default function Educations(){

    const { ref: myRef, inView:educationView} = useInView();
return (
    <div id = 'Education' >
        <h3 className='subtitle1'>Education </h3>
        
            <div className='centeredSection' ref={myRef}>
                {
                data.map((work, index) => {
                        let url = work.iconShortcut;
                        return(
                            <div className = 'centered'
                            key = {
                                "education"+index
                            } >
                                <h4 className='centeredTitle' >{work.degree }</h4>
                                <div className={educationView?'centeredResult typingShow':'centeredResult'} >{work.gpa}</div>
                                
                            </div>
                        );
                        })
                } 

                <div className = 'centeredHeroImg'  > 
                {
                data.map((work, index) => {
                        let url = work.iconShortcut;
                        return(
                            <img src = {
                                require('../img/educationIcon/' + url)
                            }
                            className = {
                                educationView ? 'centeredHeroImg fadeIn ' : 'centeredHeroImg'
                            }
                            alt = {
                                work.degree
                            }
                            key = {
                                "img"+index
                            }
                            
                            />
                        );
                        })
                } 
                </div>

        </div>
    </div>)
}