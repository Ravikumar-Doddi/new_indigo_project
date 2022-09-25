import { HiOutlineLightBulb } from "react-icons/hi";
import { GrPersonalComputer } from "react-icons/gr";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { RiComputerFill } from "react-icons/ri";
import { MdPersonOutline } from "react-icons/md";
import { MdIncompleteCircle } from "react-icons/md";
import { ImFilesEmpty } from "react-icons/im";
import {AiOutlineProfile} from 'react-icons/ai'
import { MdPeople} from "react-icons/md";

import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdThumbUp } from "react-icons/md";

import './index.css';

const WhyAcca = () =>{
  return (
      <div>
        <div className="why-main-cont">
        <h1>Why ACCA @ 1FIN?</h1>
        <div className='line'></div>
        </div>

      <div className="why-container">

        <div className="why-cont">
        <div className="ul-item">
          <li><HiOutlineLightBulb className="bulb-icon"/></li>
          <li className="conceptual">Conceptual</li>
        </div>
      
            <ul className='learn-ul'>
            <li className="li-item"><GrPersonalComputer className="react-icon"/>Regular Live Classes</li>
          <li className="li-item"><MdOutlinePeopleAlt className="react-icon"/>Expert Faculty</li>
          <li className="li-item"><RiComputerLine className="react-icon"/>Exam Oriented Content</li>
          <li className="li-item"><RiComputerFill className="react-icon"/>Dedicated Discussions Forms</li>
          <li className="li-item"><HiOutlineLightBulb className="react-icon"/>Continous Support</li>
            </ul>
    
        </div>



        <div className="why-cont">
        <div className="ul-item">
          <li><MdPeople className="bulb-icon"/></li>
          <li className="conceptual">Comprahansive</li>
        </div>
      
            <ul className='learn-ul'>
            <li className="li-item"><GrPersonalComputer className="react-icon"/>Exhaustive Q & A Bank</li>
        <li className="li-item"><RiComputerLine className="react-icon"/>1000s of MCQs for practice</li>
        <li className="li-item"><MdIncompleteCircle className="react-icon"/>Tests at regular intervals</li>
        <li className="li-item"><ImFilesEmpty className="react-icon"/>Mock Exams</li>
        <li className="li-item"><HiOutlineLightBulb className="react-icon"/>Analysis of Answer Sheets</li>
            </ul>
        
        </div>



        <div className="why-cont">
        <div className="ul-item">
          <li><HiOutlineLightBulb className="bulb-icon"/></li>
          <li className="conceptual">Career Oriented</li>
        </div>
      
            <ul className='learn-ul'>
            <li className="li-item"><RiComputerLine className="react-icon"/>Business Communication</li>
        <li className="li-item"><HiOutlineDesktopComputer className="react-icon"/>Resume Building</li>
        <li className="li-item"><MdThumbUp className="react-icon"/>Negotiation Skills</li>
        <li className="li-item"><AiOutlineProfile className = "react-icon"/>Mock Interviews</li>
        <li className="li-item"><MdPersonOutline className="react-icon"/>Placement Services</li>
            </ul>
  
        </div>


    </div>
      </div>

        
  );
}

export default WhyAcca

/*<ul className="ul-item">
          <li><HiOutlineLightBulb className="bulb-icon"/></li>
          <li className="conceptual">Conceptual</li>
        </ul>
        <ul className='icon'>
          <li className="li-item"><GrPersonalComputer className="react-icon"/>Regular Live Classes</li>
          <li className="li-item"><MdOutlinePeopleAlt className="react-icon"/>Expert Faculty</li>
          <li className="li-item"><RiComputerLine className="react-icon"/>Exam Oriented Content</li>
          <li className="li-item"><RiComputerFill className="react-icon"/>Dedicated Discussions Forms</li>
          <li className="li-item"><HiOutlineLightBulb className="react-icon"/>Continous Support</li>
        </ul>





        <ul className="ul-item">
          <li><MdPeople className="bulb-icon"/></li>
          <li className="conceptual">Comprahansive</li>
        </ul>
        <ul className='icon'>
        <li className="li-item"><GrPersonalComputer className="react-icon"/>Exhaustive Q & A Bank</li>
        <li className="li-item"><RiComputerLine className="react-icon"/>1000s of MCQs for practice</li>
        <li className="li-item"><MdIncompleteCircle className="react-icon"/>Tests at regular intervals</li>
        <li className="li-item"><ImFilesEmpty className="react-icon"/>Mock Exams</li>
        <li className="li-item"><HiOutlineLightBulb className="react-icon"/>Analysis of Answer Sheets</li>
        </ul>




      <ul className="ul-item">
          <li><HiOutlineLightBulb className="bulb-icon"/></li>
          <li className="conceptual">Career Oriented</li>
        </ul>
        <ul className='icon'>
        <li className="li-item"><RiComputerLine className="react-icon"/>Business Communication</li>
        <li className="li-item"><HiOutlineDesktopComputer className="react-icon"/>Resume Building</li>
        <li className="li-item"><MdThumbUp className="react-icon"/>Negotiation Skills</li>
        <li className="li-item"><AiOutlineProfile className = "react-icon"/>Mock Interviews</li>
        <li className="li-item"><MdPersonOutline className="react-icon"/>Placement Services</li>
        </ul>  



        <p className="live-classes">Live classes start from late September, 2022. <span className="span-element">Click here to Enrol Now.</span></p> 
        <img src = "https://il-app.s3.ap-south-1.amazonaws.com/images/acca_silver_lp_logo.png" alt = "" className="silver-learning"/>
        */