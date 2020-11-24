import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNews, confirmNews, deleteNews, createNews } from '../redux/modules/news'
import newsData from '../MOCK_DATA.json'
import NewsList from '../components/NewsList'
import CreateNewsForm from '../components/CreateNewsForm'

const newsSelector = (isAdmin, username) =>
  isAdmin
    ? state => state.news.items
    : state => state.news.items.filter(item => item.confirmed || item.owner === username)

function News() {
  const dispatch = useDispatch()
  const username = useSelector(state => state.auth.username)
  const isAdmin = useSelector(state => state.auth.isAdmin)
  const isAuth = useSelector(state => state.auth.isAuth)

  const news = useSelector(newsSelector(isAdmin, username))

  const [openModal, setOpenModal] = React.useState(false)
  const [filterText, setFilterText] = React.useState('')

  const filteredNews =
    filterText &&
    news.filter(item => item.title.toLowerCase().includes(filterText.toLocaleLowerCase()))

  const newsToRender = filterText ? filteredNews : news

  const handleConfirmNews = id => {
    dispatch(confirmNews(id))
  }

  const handleDeleteNews = id => {
    dispatch(deleteNews(id))
  }

  const handleAddNews = news => {
    news.owner = username
    dispatch(createNews(news))
    setOpenModal(false)
  }

  const openAddNewsModal = () => {
    setOpenModal(true)
  }

  const closeModal = () => {
    setOpenModal(false)
  }

  React.useEffect(() => {
    dispatch(setNews(newsData))
  }, [])

  return (
    <section className='news'>
      <h1>NEWS PAGE</h1>
      {isAuth && (
        <button onClick={openAddNewsModal} className='news__create-btn'>
          Добавить
        </button>
      )}
      {openModal && <CreateNewsForm handleAddNews={handleAddNews} closeModal={closeModal} />}
      <div className='news__input-field input-field'>
        <input
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
          type='text'
          className='news__input'
          placeholder='Фильтр по названию...'
        />
      </div>
      <NewsList
        news={newsToRender}
        isAdmin={isAdmin}
        handleConfirmNews={handleConfirmNews}
        handleDeleteNews={handleDeleteNews}
      />
    </section>
  )
}

export default News
