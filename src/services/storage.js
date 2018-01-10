const privateMethods = {
  _setItem(key, value) {
    if(key !== null && value !== null) {
      localStorage.setItem(key, value)
    }
  },
  _setObject(key, value) {
    if(value !== null && key !== null) {
      const json = JSON.stringify(value)
      this._setItem(key, json)
    }
  },
  _getItem(key) {
    return (key !== null) ? localStorage.getItem(key) : null
  },
  _getObject(key) {
    const value = this._getItem(key)
    return (value !== null) ? JSON.parse(value) : null;
  },
  _removeItem(key) {
    if(key) {
      localStorage.removeItem(key)
    }
  }
}

export default class Storage {
  constructor() {
    this.tokenKey = 'auth-token'
    this.authUserKey = 'auth-user'
  }

  setAuthUser(user) {
    privateMethods._setObject(this.authUserKey, user)
    
  }

  getAuthUser() {
    return privateMethods._getObject(this.authUserKey)
  }

  removeAuthUser() {
    return privateMethods._removeItem(this.authUserKey)
  }
}