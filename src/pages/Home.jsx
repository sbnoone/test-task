import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const username = useSelector(state => state.auth.username)
  const greetingMessage = username ? `Привет, ${username}!` : 'Привет, Гость!'

  return (
    <section className='home'>
      <h1>Home Page</h1>
      <p>{greetingMessage}</p>
    </section>
  )
}

export default Home
