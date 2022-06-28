import './port.scss'
import { Link, NavLink} from 'react-router-dom'
import LogoS from '../assets/images/myLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin,  faYoutube } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () =>(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src = {LogoS} alt = "myLogo"/>
        </Link>
        <nav>
            <NavLink exact = "true" activeclassname = "active" to="/">
                <FontAwesomeIcon icon={faHome} color ="white"/>                 
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color ="white"/>                 
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className="contact-link" to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color ="white"/>                 
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="blank"
                 rel = 'noreferrer' 
                 href ="https://www.linkedin.com/in/idowu-motunrayo-89b62122a/"
                 >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a target="blank"
                 rel = 'noreferrer' 
                 href ="https://github.com/Motungeorge6"
                 >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a target="blank"
                 rel = 'noreferrer' 
                 href ="https://www.youtube.com/channel/UCfX3pwkvATw9RNhsZByiNXg"
                 >
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    
    </div>
)

export default Sidebar

