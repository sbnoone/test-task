const NEWS_SET = 'news/SET'

const NEWS_CREATE = 'news/CREATE'
const NEWS_DELETE = 'news/DELETE'
const NEWS_CONFIRM = 'news/CONFIRM'

const initialState = {
  items: [],
}

export default function newsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case NEWS_SET:
      return { ...state, items: payload }

    case NEWS_CREATE: {
      const item = {
        ...payload,
        confirmed: false,
        createdAt: new Date().toLocaleDateString(),
        id: Math.random(),
      }

      return { ...state, items: [item, ...state.items] }
    }

    case NEWS_DELETE:
      return { ...state, items: state.items.filter(item => item.id !== payload) }

    case NEWS_CONFIRM:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === payload) {
            console.log('news confirmed', item.id, payload)
            return { ...item, confirmed: true }
          }
          return item
        }),
      }

    default:
      return state
  }
}

export const setNews = news => ({
  type: NEWS_SET,
  payload: news,
})

export const createNews = news => ({
  type: NEWS_CREATE,
  payload: news,
})
export const deleteNews = id => ({
  type: NEWS_DELETE,
  payload: id,
})
export const confirmNews = id => ({
  type: NEWS_CONFIRM,
  payload: id,
})
