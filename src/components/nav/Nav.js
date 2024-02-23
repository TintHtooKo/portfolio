import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'


export default function Nav() {

    const [menuOpen,setMenuOpen] = useState(false)

    const clickOpen = () =>{
        setMenuOpen(!menuOpen)
    }
  return (
    <nav className='container'>
        <div className='logo'><a href='#hero' style={{color:'white'}}>Portfolio</a></div>
        {/* <div className='menu'  onClick={clickOpen}>
        <i className="fas fa-bars" style={{color:'white',fontSize:'2rem'}}></i>
        </div>
        <ul className={menuOpen ? "open" : " "}>
            <li><a href="#hero" >Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
        </ul> */}
    </nav>
  )
}
