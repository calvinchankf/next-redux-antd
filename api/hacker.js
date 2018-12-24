import { get } from 'utils/request'
import { FETCH_HACKER_NEWS } from 'constants'

export const fetchHackerNews = async (state, dispatch) => {
  const result = await get('http://hn.algolia.com/api/v1/search?query=redux&page=' + parseInt(state.page + 1))
  dispatch({
    type: FETCH_HACKER_NEWS,
    payload: {
      page: state.page + 1,
      news: result.hits
    }
  })
}