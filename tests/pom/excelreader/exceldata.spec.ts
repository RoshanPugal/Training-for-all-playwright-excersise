import{test,expect} from "@playwright/test"
import * as XLSX from "xlsx"

interface Credential{
    id:number
    username:string
    password:string
} 
const workbook=XLSX.readFile('tests/exceldata/credential.xlsx')
const sheet=workbook.Sheets[workbook.SheetNames[0]]
const excledata=XLSX.utils.sheet_to_json<Credential>(sheet)

const credential = excledata

test.describe('Login test for excel data',()=>{
    for(const cred of credential){
        test(`Datadriven test ID:${cred.id}`,async({page})=>{
            await page.goto('https://practicetestautomation.com/practice-test-login/')
            await page.fill('#username',cred.username)
            await page.fill('#password',cred.password)
            await page.click('.btn')
            const title =await page.title()
            console.log(`Title id:${cred.id}`,title)
            const message=await page.textContent('.post-title')
            expect(message).toContain('Logged In Successfully')
        })
    }
    
})