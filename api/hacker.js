import { get } from 'utils/request'
import { FETCH_HACKER_NEWS } from 'constants'

export const fetchHackerNews = async dispatch => {
  const result = await get('http://hn.algolia.com/api/v1/search?query=redux')
  console.log(result)
  dispatch({
    type: FETCH_HACKER_NEWS,
    payload: result.hits
  })
}