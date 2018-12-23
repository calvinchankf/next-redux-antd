import fetch from 'isomorphic-fetch'
import {
  webHost,
  webport,
} from './config'

const get = async url => {
  const raw = await fetch(`${webHost}:${webport}${url}`);
  return await raw.json()
}