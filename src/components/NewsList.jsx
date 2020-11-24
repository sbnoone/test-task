import React from 'react'
import NewsItem from './NewsItem'

function NewsList({ news, isAdmin, handleConfirmNews, handleDeleteNews }) {
  return (
    <ul className='news__list'>
      {news &&
        news.map(item => (
          <NewsItem
            key={item.id}
            {...item}
            isAdmin={isAdmin}
            handleConfirmNews={handleConfirmNews}
            handleDeleteNews={handleDeleteNews}
          />
        ))}
    </ul>
  )
}

export default NewsList
