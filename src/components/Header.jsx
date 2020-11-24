import React from 'react'
import { Link } from 'react-router-dom'

import LoginForm from './LoginForm'

function Header({ togglePopup, isPopupOpen, isAuth, handleLogin }) {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
          <nav className='header__nav'>
            <ul className='header__nav-list'>
              <li className='header__nav-item'>
                <Link to='/' className='header__nav-link'>
                  Home
                </Link>
              </li>
              <li className='header__nav-item'>
                <Link to='/news' className='header__nav-link'>
                  News
                </Link>
              </li>
            </ul>
          </nav>
          <div className='header__popup'>
            <button onClick={togglePopup} className='header__login-btn'>
              {isAuth ? 'Выйти' : 'Вход'}
            </button>
            {isPopupOpen && <LoginForm handleLogin={handleLogin} />}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
