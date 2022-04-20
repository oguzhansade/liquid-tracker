import React from 'react'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
  return (
    <div className='container-fluid py-3 mx-0s mb-3 header'>
        <span className='header-title'>
            <FontAwesomeIcon icon={faDroplet} /> Liquid Tracker </span>
    </div>
  )
}

export default Header