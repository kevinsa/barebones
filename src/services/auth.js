const valid_username = 'bare@bones.com'
const valid_password = 'bones'

export const LoginUser = (username, password) => {
    return new Promise((resolve, reject) => {
        // add callout to your token/oAuth endpoint here
        setTimeout(() => {
            if(username === valid_username && password === valid_password) {
                resolve({
                    id: 1,
                    name: 'Bare Bones',
                    username: username,
                    token: '4GToBisWO9plqtS6mAJWF8YLIEyVq3gO'
                })
            }
            else {
                reject(new Error('Invalid User Credentials'))
            }
        }, 3000)
    })
}
