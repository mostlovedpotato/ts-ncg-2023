import React from 'react'

import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div>
        <footer className={`${classes.footer} footer`}>
            <span className='text-muted'>All Rights Reserved By Potatoe@Co</span>

        </footer>
    </div>
  )
}

export default Footer