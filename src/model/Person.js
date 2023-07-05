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
        return `A fresh grade student at City University of Hong Kong Degree in Computer Science and Higher Diploma  in Software Engineering graduated with professional training seeking an entry-level position in the information technology industry which will utilize the organizational and communication skills developed through my industrial experience.`;
    }
}
export default Person;

