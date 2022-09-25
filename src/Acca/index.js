import {MdOutlineMenuBook} from "react-icons/md"
import {FcAlarmClock} from 'react-icons/fc'
import {MdOutlineLaptopChromebook} from 'react-icons/md'
import {MdEventAvailable} from 'react-icons/md'

import './index.css'

const Acca = () =>(
    <div>
    <div className="acca-container">
        <ul className='ul-cont2'>
            <li className="li-item">ACCA (Association of Chartered Certified Accountants) is a globally recognized accounting qualification offered by ACCA Global, UK</li>
            <li className="li-item">It provides unlimited career opportunities with MNCs and Big4s</li>
            <li className="li-item">A course which you can complete along with your graduation</li>
            <li className="li-item">It has 2 lakh + members & 5 lakh + students across 180+ countries</li>
        </ul>
    </div>
    <div className="cards-cont">
    <div className='levels-cart'>
        <h1 className="levels-head">Levels</h1>
        <div className="book-cont">
        <MdOutlineMenuBook className="book"/>
        <p className="desc">Three (13 Papers)</p>
        </div>
    </div>

    <div className='levels-cart'>
        <h1 className="levels-head">Duration
        </h1>
        <div className="book-cont">
        <FcAlarmClock className="book"/>
        <p className="desc">6-30 Months</p>
        </div>
    </div>

    <div className='levels-cart'>
        <h1 className="levels-head">Exams</h1>
        <div className="book-cont">
        <MdOutlineLaptopChromebook className="book"/>
        <p className="desc">Quarterly (Online)</p>
        </div>
    </div>

    <div className='levels-cart'>
        <h1 className="levels-head">Exemptions</h1>
        <div className="book-cont">
        <MdEventAvailable className="book"/>
        <p className="desc">Available</p>
        </div>
    </div>
    </div>
    </div>
)

export default Acca

