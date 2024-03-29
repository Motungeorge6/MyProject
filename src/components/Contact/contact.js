import { useState,useEffect, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animated'
import emailjs from '@emailjs/browser'

import './contact.scss'

const Contact = ()=>{
    // const[letterClass,setLetterClass] = useState('text-animate')
    // const refForm = useRef

    // useEffect(()=>{
    //         return setTimeout(()=>{
    //             setLetterClass('text-animate-hover')
    //         },3000)
    //       },[])

    // const sendEmail =(e) =>{
    //     e.preventDefault()

    //     emailjs
    //      .sendForm(
    //         'gmail',
    //         'template_a1w3gxp',
    //         refForm.current,
    //         'service_ge6psds'
    //     )
    //     .then(
    //         ()=>{
    //             alert('Message successfully sent!')
    //         }
    //     )
    // }
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
            <ul>
            <li className='half'>
                <input 
                type="text" 
                name ="name" 
                placeholder="Name"
                 required/>
            </li>
            <li className='half'>
                <input
                type="email"
                name="email"
                placeholder="Email"
                required
                />
            </li>
            <li>
                <input 
                placeholder="Subject"
                 type="text" 
                 name="subject" 
                 required/>   
            </li>
            <li>
                <textarea
                 placeholder='Message'
                  name='message'
                  required>                  
                  </textarea>
            </li>
            <li>
                <input
                 type="submit" 
                 className="flat-button"
                  value ="SEND"/>
            </li>
            </ul>
        </form>

    </div>

   </div>

 </div>
 <Loader type="pacman"/>

 
 </>
    )
}

export default Contact