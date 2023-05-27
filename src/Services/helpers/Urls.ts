export const Urls = {
    base: 'http://localhost:8080',
    login: 'auth'
}

export const generateUrl = (...args: string[]) => args.join('/')
