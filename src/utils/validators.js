export function authValidate({ username, password }) {
  const errors = {}

  if (username.trim() === '') {
    errors.username = 'Введите логин'
  }

  if (password.trim() === '') {
    errors.password = 'Введите пароль'
  }

  return {
    errors,
    isValid: Object.keys(errors).length < 1,
  }
}

export function newsValidate({ title, text }) {
  const errors = {}

  if (title.trim() === '') {
    errors.title = 'Введите название'
  }

  if (text.trim() === '') {
    errors.text = 'Введите текст'
  }

  return {
    errors,
    isValid: Object.keys(errors).length < 1,
  }
}
