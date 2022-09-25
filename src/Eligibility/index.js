import {TiTick} from "react-icons/ti"

import './index.css'

const  Eligibility = () =>{
    return (
      <div className="eligibility-cont">
        <div className="acca-eligibility">
        <h1 className="heading">ACCA - Eligibility</h1>
        <div className='line'></div>
        </div>
        <p className="para1">To appear for the ACCA course examination a candidate should have</p>
          <p className='qualified'> <span><TiTick/></span> Qualified the 10+2 exams</p>
          <p className='qualified'> <span><TiTick/></span>An aggregate of 65% in Mathematics / Accounts and English and a minimum of 50% in other subjects</p>
      </div>
    );
  }
  
  export default Eligibility;