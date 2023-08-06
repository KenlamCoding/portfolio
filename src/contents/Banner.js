import data from '../data/person.json';
export default function Banner(){
    {
        /*Img show Names and slogan
          Design : Img include words
        */
    }
    return(
        <div className='imgShow'>
            <section>
                <h1  className = '' >
                {
                  data.firstName + ' '
                  +data.lastName
                }
              </h1>
              <h2 >A web developer</h2>
            </section>
                  
            
    </div>)
}