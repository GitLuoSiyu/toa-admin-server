import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

/** 获取 token */
export function getToken () {
  return Cookies.get(TokenKey)
}

/** 重置 token */
export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

/** 移除 token */
export function removeToken () {
  return Cookies.remove(TokenKey)
}
