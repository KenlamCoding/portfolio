import data from "../data/sideProjects.json";
export default function sideProjects(){
    return(<div  id = 'SideProject' >
            <h3 className='subtitle1'>SideProject</h3>
            <div className='gridContainer'>
                {
                data.map((sideproject,index)=>{
                    return(
                        <div key={'projects'+index} className='card'>
                            <h5 className='cardTitle'>{sideproject.projectName}</h5>
                            <a href = {sideproject.url} target = '_blank' rel = "noopener noreferrer" >
                               <img src = {require('../img/projectIcon/'+sideproject.projectIcon)}
                                width = '250px'
                                className = 'cardImg'
                                alt = {sideproject.projectName}/>
                            </a>
                            <div className = 'acResult' >
                                    <div >
                                        {sideproject.description}
                                    </div>
                                    <div className = '.flexRowContainer-jc-l' >
                                        {
                                            sideproject.techniques.map((technique,index)=>{
                                                return(
                                                    <div className='techName'>{technique}</div>
                                                    )   
                                            })
                                        }
                                    </div>
                            </div>
                            
                        </div>
                    );
                })
                }
            
            </div>
          </div>);
}