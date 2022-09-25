import {FiMenu} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {BsCartFill} from 'react-icons/bs'
import './index.css'

const Header = () =>(
    <div className="header-container">
        <div className='menu-cont'>
        <FiMenu className='menu-icon'/>
        <h1 className='head'>IndigoLearn</h1>
        </div>
        <div className='header-options'>
        <p className='buy-course'>BUY COURSES</p>
        <p className='buy-course'>PROGRAMS</p>
        <p className='buy-course'>SCHOLARSHIPS</p>
        <p>FREE RESOURCES</p>
        </div>
        <button className='button' >
            <CgProfile className='login'/>
            
            <p className='login-signup'>Log In/Sign Up</p>
        </button>
        <BsCartFill className='cart'/>

    </div>
)

export default Header
