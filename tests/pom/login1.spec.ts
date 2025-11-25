import{expect, Locator, Page} from "@playwright/test"
import { time } from "console"
import { title } from "process"

export class Loginpage{
    page:Page
    enterusername:any
    enterpassword:any
    submitbutton:any
    sucessmessage:any



    constructor(page:Page){
        this.page=page
        this.enterusername=page.locator('//input[@name="username"]')
        this.enterpassword=page.locator('//input[@name="password"]')
        this.submitbutton=page.locator('#submit')
        this.sucessmessage=page.locator('.post-title')
    }

    async goto(){
        await this.page.goto('https://practicetestautomation.com/practice-test-login/')
    }
    async usernameinput(username:string){
        await this.enterusername.fill(username)
    }
    async passwordinput(password:string){
        await this.enterpassword.fill(password)
    }
    async loginbutton(){
        await this.submitbutton.click()
    }
    async sucessmessageinput(){
        const title=await this.sucessmessage.textContent()
        console.log('Title Name:',title)
        expect(this.sucessmessage).toContainText('Logged In Successfully')
    }

}