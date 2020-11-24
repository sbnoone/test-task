import React from 'react'
import { newsValidate } from '../utils/validators'

// TODO: add simple validation

function CreateNewsForm({ handleAddNews, closeModal }) {
  const [values, setValues] = React.useState({ title: '', text: '' })
  const [errors, setErrors] = React.useState({})

  const onChange = e => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = e => {
    e.preventDefault()

    const { isValid, errors } = newsValidate(values)

    if (!isValid) {
      setErrors(errors)
    } else {
      handleAddNews(values)
      setValues({ title: '', text: '' })
    }
  }

  return (
    <div className='modal'>
      <div className='modal__content'>
        <h6 className='modal__label'>Добавить новость</h6>
        <form onSubmit={onSubmit} className='form modal__form'>
          <div className='form__input-field'>
            <input
              onChange={onChange}
              value={values.title}
              name='title'
              type='text'
              placeholder='Название...'
              className='form__input'
            />
          </div>
          <div className='form__input-field'>
            <textarea
              onChange={onChange}
              value={values.text}
              placeholder='Текст новости...'
              name='text'
              type='text'
              className='form__input form__textarea'
            />
          </div>
          <div className='form__buttons'>
            <button type='submit' className='form__btn'>
              Добавить
            </button>
            <button onClick={closeModal} className='form__btn'>
              Отмена
            </button>
          </div>
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

export default CreateNewsForm
