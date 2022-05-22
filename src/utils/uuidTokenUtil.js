import {v4 as uuidV4} from 'uuid'

const key = 'uuid'

export function getUUID() {
  let value = localStorage.getItem(key)

  if (!value) {
    value = uuidV4()
    localStorage.setItem(key, value)
  }

  return value
}

