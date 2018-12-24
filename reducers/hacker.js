import { FETCH_HACKER_NEWS, CLEAN_HACKER_NEWS } from 'constants'

const hackerInitState = {
  news: []
}
const hackerReducer = (state, action) => {
  console.log('readucer', action)
  switch (action.type) {
    case FETCH_HACKER_NEWS:
      return { news: action.payload }
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