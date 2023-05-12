import React from 'react'
import '../styles/Footer.scss'

export default function Footer() {

    const date = new Date();
    const year = date.getFullYear();

  return (
    <footer className='mt-2'>
        <p>Copyright &copy; {year}  All rights reserved.</p>
        <div>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter"></i>
        </div>
    </footer>
  )
}
