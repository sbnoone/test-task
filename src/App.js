import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import News from './pages/News'
import { authLogin, authLogout } from './redux/modules/auth'

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.isAuth)
  const [isPopupOpen, setIsPopupOpen] = React.useState(false)

  const togglePopup = () => {
    if (isAuth) {
      handleLogout()
    } else {
      setIsPopupOpen(val => !val)
    }
  }

  const handleLogin = userData => {
    dispatch(authLogin(userData))
    togglePopup()
  }

  const handleLogout = () => dispatch(authLogout())

  const routes = (
    <Switch>
      <Route exact path='/news' component={News} />
      <Route path='/' component={Home} />
    </Switch>
  )

  return (
    <div className='grid-container'>
      <Header
        togglePopup={togglePopup}
        isPopupOpen={isPopupOpen}
        isAuth={isAuth}
        handleLogin={handleLogin}
      />
      <main className='main'>
        <div className='container'>{routes}</div>
      </main>
      <footer className='footer'>
        <div className='container'>Footer</div>
      </footer>
    </div>
  )
}

export default App
