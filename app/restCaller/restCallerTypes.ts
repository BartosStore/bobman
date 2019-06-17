export interface IData {}

export interface IContributor {
    id: number
    login: string
    type: string
    contributions: number
    url: string
}

export type Issue = {
    title: string,
    description: string
}