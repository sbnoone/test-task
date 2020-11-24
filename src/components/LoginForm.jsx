import React from 'react'
import { authValidate } from '../utils/validators'

function LoginForm({ handleLogin }) {
  const [values, setValues] = React.useState({ username: 'admin', password: 'admin' })
  const [errors, setErrors] = React.useState({})

  const onChange = e => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = e => {
    e.preventDefault()
    const { isValid, errors } = authValidate(values)

    if (!isValid) {
      setErrors(errors)
    } else {
      handleLogin(values)
    }
  }

  return (
    <div className='auth-popup'>
      <div className='form-wrapper'>
        <h6>Вход в аккаунт</h6>
        <form onSubmit={onSubmit} className='form'>
          <div className='form__input-field'>
            <input
              onChange={onChange}
              value={values.username}
              name='username'
              type='text'
              className='form__input'
            />
          </div>
          <div className='form__input-field'>
            <input
              onChange={onChange}
              value={values.password}
              name='password'
              type='password'
              className='form__input'
            />
          </div>
          <button type='submit' className='form__btn'>
            Войти
          </button>
        </form>
        <ul>
          {Object.values(errors).map(error => (
            <li key={error} style={{ color: 'red' }}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LoginForm
