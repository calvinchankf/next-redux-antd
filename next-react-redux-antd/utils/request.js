import fetch from 'isomorphic-fetch'
import {
  apiHost,
  apiPort,
  apiVersion,
} from './config'

const get = async url => {
  const endpoint = url.includes('http://') || url.includes('https://') ? url : `${apiHost}:${apiPort}/${apiVersion}${url}`
  const raw = await fetch(endpoint);
  return await raw.json()
}

export {
  get
}