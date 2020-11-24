import React from 'react'

function NewsItem({
  title,
  text,
  createdAt,
  id,
  confirmed,
  isAdmin,
  handleConfirmNews,
  handleDeleteNews,
}) {
  const onConfirmNews = () => {
    handleConfirmNews(id)
  }
  const onDeleteNews = () => {
    handleDeleteNews(id)
  }

  return (
    <li className='news__item'>
      <div className='news__item-header'>
        <h4 className='news__title'>Название: {title}</h4>
      </div>
      <div className='news__item-body'>
        <p className='news__text'>{text}</p>
        <div className='news__created-at'>Добавлено: {createdAt}</div>
      </div>
      {isAdmin && (
        <div className='news__item-actions'>
          <button onClick={onDeleteNews} className='news__action-btn'>
            Удалить
          </button>
          {!confirmed && (
            <button onClick={onConfirmNews} className='news__action-btn'>
              Подтвердить
            </button>
          )}
        </div>
      )}
    </li>
  )
}

export default NewsItem
