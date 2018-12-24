import fetch from 'isomorphic-fetch'
import {
  apiHost,
  apiPort,
  apiVersion,
} from './config'

const get = async url => {
  const raw = await fetch(`${apiHost}:${apiPort}/${apiVersion}${url}`);
  return await raw.json()
}

export {
  get
}