import { FETCH_HACKER_NEWS, CLEAN_HACKER_NEWS } from 'constants'

const hackerInitState = {
  page: -1,
  news: []
}
const hackerReducer = (state, action) => {
  switch (action.type) {
    case FETCH_HACKER_NEWS:
      const temp = state.news
      temp.push(...action.payload.news)
      return { page: action.payload.page, news: temp }
    case CLEAN_HACKER_NEWS:
      return hackerInitState
    default:
      return state;
  }
}

export {
  hackerInitState,
  hackerReducer,
}