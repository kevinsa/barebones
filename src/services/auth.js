export const LoginUser = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Bare Bones',
                username: username,
            })
        }, 3000)
    })
}
