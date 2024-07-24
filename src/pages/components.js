import React from 'react'
import { NavLink } from 'react-router-dom'
import payment from '../images/payment.png'
import { FaBars, FaCircleUser, FaCartShopping } from 'react-icons/fa6'
import { useState,useEffect } from 'react'


export function Navbar (){
    const [screenMode, setScreenMode] = useState('large')
    const [toggleNav, setToggleNav] = useState(true)
    useEffect(() => {
        const updateScreenMode = () => {
            if (window.innerWidth <= 650) {
                setScreenMode('small');
                setToggleNav(false)
            } else {
                setScreenMode('large');
                setToggleNav(true)
            }
        };
        updateScreenMode();
        window.addEventListener('resize', updateScreenMode);
        return () => {
            window.removeEventListener('resize', updateScreenMode);
        };
    }, []);


    return(
        <div className='Navbar'>
            <div className="logo">
                PineTwist
            </div>
            <div className={screenMode==='small'?'smallScreenNav':screenMode==='large'?'link':null} style={toggleNav?{display:'flex'}:{display:'none'}}>
                <NavLink className='navlink' to='/'>Home</NavLink>
                <NavLink className='navlink' to='/About'>About</NavLink>
                {screenMode==='small'?<NavLink className='navlink' to='/About'>Account</NavLink>:null}
            </div>

            <div className="user-action-icons">
                {screenMode==='small'?<span ><FaBars onClick={()=>{if(screenMode==='small'){setToggleNav(!toggleNav)}}}/></span> : null}
                {screenMode==='large'?<span ><FaCircleUser/></span> : null}
                {/* <span><FaCircleUser/></span> */}
                {/* <span><FaCartShopping/></span> */}
            </div>

        </div>
    )
}



export function Footer () {
    return(
        <div className='footer'>
            <h2>PineTwist</h2>
            <div className='contact-info'>
                <span>233 49494949494</span>
                <span>penny@gmail.com</span>
                <span> Kumasi, Ghana</span>
            </div>
            <div className="payment-image">

            </div>
            <img src={payment} alt="" />
            <p>Created By CND CONSULT | All Rights Reserved!</p>

        </div>
    )
}


function Components() {
  return (
    <div>Components</div>
  )
}

export default Components