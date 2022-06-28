import './logo.scss'
import LogoS from '../../../assets/images/motun.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
const Logo = () => {


    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();
    
    useEffect(()=>{
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgRef.current, {
              duration:1,
              opacity:1
        })
        .from(outlineLogoRef.current,{
            drawSVG:0,
            duration:20,
        })
        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity : 1,
                delay : 4,
                duration:4
            }
        )
    },[])

    return(
        <div className='logo-container'>
           <img ref={solidLogoRef} className='solid-logo' src={LogoS} alt='S'/> 
           <svg 
           version="1.0" 
         width="559pt" 
         height="897pt" 
        viewBox="0 0 2000.000000 3008.000000"
        xmlns="http://www.w3.org/2000/svg"
     >
    <g 
    className='svg-container'
    transform="translate(0.000000,3008.000000) scale(0.100000,-0.100000)"
      fill="#000000"
    >
        <path d="M7012 17535 c2 -23 18 -37 18 -16 0 5 3 16 6 25 4 11 1 16 -10 16
          -11 0 -15 -8 -14 -25z"/>
    </g>
 </svg>
           

        </div>
    )
}

export default Logo