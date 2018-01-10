export const LoginUser = (username, password) => {
    return new Promise((resolve, reject) => {
        // add callout to your token/oAuth endpoint here
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Bare Bones',
                username: username,
                token: '4GToBisWO9plqtS6mAJWF8YLIEyVq3gO'
            })
        }, 3000)
    })
}
