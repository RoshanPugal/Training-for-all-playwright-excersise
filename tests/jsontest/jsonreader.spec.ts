import * as fs from "fs"

export interface credential{
    username:string
    Role:string
}
export interface user{
    id:number
    details:credential
}
export interface root{
    users:user[]
}

export function jsondata():root{
    const path = fs.readFileSync('tests/jsontest/sample.json','utf-8')
    return JSON.parse(path) as root
}