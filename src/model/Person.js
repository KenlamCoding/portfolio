/**
    * @description      : 
    * @author           : admin
    * @group            : 
    * @created          : 05/05/2023 - 09:19:42
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/05/2023
    * - Author          : admin
    * - Modification    : 
**/
class Person{
    constructor(){
        this.firstName="Lam";
        this.lastName = "Ka Yik";
        this.position="Frontend programmer";
    }
    introduce=()=>{
        return (
        <div className = "flexRowContainer " >
            <div>
                <div className="cityu">
                    <h3 className="cityuColor">City University of Hong Kong  </h3>
                    <h4>Degree in Computer Science </h4>
                </div>
                <div className="ive">
                    <h3 className="">Hong Kong institue of Vocational Education  </h3>
                    <h4>Higher Diploma in Software Engineering</h4>
                </div>
               
                
               
                
            </div>
            <div className = "detailPerson" >
                 <h4>A fresh graduate student👨‍💻</h4>
                 <div className="aboutMe">Seeking an entry-level position in the information technology industry which will utilize the organizational and communication skills developed through my industrial experience.</div>
            </div>
            
        </div>)
    }
}
export default Person;

