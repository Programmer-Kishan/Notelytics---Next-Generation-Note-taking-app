
export interface ICookie {
    _id: string,
    username: string,
    email: string,
    notebooks: string[],
    notebookNames: string[]
}

export type CookieContextType = {
    user: ICookie,
    getCookie: (name: string) => string,
    setCookies: (user: ICookie) => void
}