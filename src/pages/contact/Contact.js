import React from 'react'
import './Contact.css'
import Ph from '../../assets/whatsapp.jpg'
import Github from '../../assets/github.png'
import Link from '../../assets/linkedin.png'


export default function Contact() {
  return (
    <div className='contact'>
        <h1>Contact Me</h1>
        <div className='easy'>
            <h4>Easy to Contact</h4>
            <p>tinthtooko.official18@gmail.com</p>
            <div className='qr'>
                <div className='code'>
                    <img src={Ph}/>
                    <p>Whatsapp / Phone</p>
                </div>
                <div className='code'>
                    <img src={Github}/>
                    <p>My Github</p>
                </div>
                <div className='code'>
                    <img src={Link}/>
                    <p>My LinkedIn</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}
