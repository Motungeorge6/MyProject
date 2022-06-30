// import LogoTitle from '../../assets/images/motun.png'
import {Link} from 'react-router-dom'
import './home.scss'
import AnimatedLetters from '../AnimatedLetters/animated'
import { useEffect, useState } from 'react'
import Logo from './Logo/logo'
import Loader from 'react-loaders'





const Home = () => {
  const [letterClass,setLetterClass] = useState('text-animate-hover')
  const nameArray = ['M','o','t','u','n','r','a','y','o']
  const jobArray = ['A',' ','W',
  'e',
  'b', 
  '', 
  'd',
  'e',
  'v',
  'e',
  'l',
  'o',
  'p',
  'e',
  'r',
  '.'
]

    return (
        <>
   <div className="container home-page">
    <div className="text-zone">
        <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
             <br  /> 
             <span className={`${letterClass} _13`}>I</span> 
             <span className={`${letterClass} _13`}>'m</span> 
             <br/>
        <AnimatedLetters letterClass={letterClass}
        strArray = {nameArray}
        idx = {15}/>
        <br/>
        <AnimatedLetters letterClass={letterClass}
        strArray = {jobArray}
        idx = {22}/>

</h1>
<h2>Frontend Developer/JavaScript Expert/Social Media Influencer </h2>
<Link to="/contact" className = 'flat-button' > CONTACT ME</Link>
    </div>
<Logo/>
   </div>
   <Loader type = "pacman"/>
   </>


    );


}


export default Home