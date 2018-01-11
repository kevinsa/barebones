const simulateError = false

export const createUserAccount = (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!simulateError) {
        resolve(userData)
      }
      else {
        reject(new Error('Unable to create account'))
      }
    }, 3000)
  })
}