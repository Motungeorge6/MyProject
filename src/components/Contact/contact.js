import { useState,useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animated'
import './contact.scss'

const Contact = ()=>{
    // const[letterClass,setLetterClass] = useState('text-animate')

    // useEffect(()=>{
    //         return setTimeout(()=>{
    //             setLetterClass('text-animate-hover')
    //         },3000)
    //       })
    return(
 <>
 <div className='container contact-page'>
   <div className='text-zone'>
    <h1>
        <AnimatedLetters
        // letterClass={letterClass}
         strArray={['C','o','n','t','a','c','t',' ', 'm','e']}
        idx={15}
        />
    </h1>
    <p>
        I am interested in freelance opportunities-especially ambitious or 
        large projects. However,
        if you have other request or question,don't hesistate to contact me using below form either.
    </p>
    <div className='contact-form'>
        <form>
            <li className='half'>
                <input type="text" name ="name" placeholders="Name" required/>
            </li>
            <li className='half'>
                <input
                type="email"
                name="email"
                placeholders="Email"
                required
                />

            </li>
        </form>

    </div>

   </div>

 </div>
 <Loader type="pacman"/>

 
 </>
    )
}

export default Contact