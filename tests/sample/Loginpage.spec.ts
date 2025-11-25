import{test,expect}from "@playwright/test"
import { Loginpage } from "./Login.spec"
import * as XLSX from "xlsx"
import { exec } from "child_process"
import { log } from "console"



const workbook=XLSX.readFile('tests/sample/Logindata.xlsx')
const sheet=workbook.Sheets[workbook.SheetNames[0]]
const excledata=XLSX.utils.sheet_to_json<any>(sheet)


test.describe('Login test for excel data',()=>{
    for(const data of excledata){
        const {Scenario,Username,Password,product,product1}=data as{Username:string,Scenario:string,Password:string,product:string,product1:string}

        test(`Login test:${Scenario}`,async({page})=>{
            const loginpage = new Loginpage(page)

            await loginpage.goto()
            await loginpage.logindate(Username,Password)
            await loginpage.sucess()
            await loginpage.product()
            await loginpage.product1()
            await loginpage.check()
            
        })

    }
})