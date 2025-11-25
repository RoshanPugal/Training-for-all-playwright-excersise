import{expect , Locator, Page} from "@playwright/test"

export class Loginpage{
    page:Page
    usernameinput:Locator
    passwordinput:Locator
    submitbtn:Locator
    sucesspage:Locator
    cart:Locator
    cart1:Locator
    addtocart:Locator
    checkthecart:Locator



    constructor(page:Page){
        this.page=page
        this.usernameinput=this.page.locator('#user-name')
        this.passwordinput=this.page.locator('#password')
        this.submitbtn=this.page.locator('//input[@id="login-button"]')
        this.sucesspage=this.page.locator('//div[@class="app_logo"]')
        this.cart=this.page.locator("//div[text()='Sauce Labs Backpack']")
        this.cart1=this.page.locator("//div[text()='Sauce Labs Bike Light']")
        this.addtocart=this.page.locator("//button[text()='ADD TO CART']")
        this.checkthecart=this.page.locator('//span[@class="fa-layers-counter shopping_cart_badge"]')
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/v1/')
    }
    async logindate(username:string,password:string){
        await this.usernameinput.fill(username)
        await this.passwordinput.fill(password)
        await this.submitbtn.click()
    }
    async sucess(){
        const msg=await this.page.title()
    //    const print= await this.sucesspage.textContent()
       console.log("CurrentPage:",msg)
    }
    async product(){
        await this.cart.click()
        await this.addtocart.click()
        await this.page.goBack()
    }
      async product1(){
        await this.cart1.click()
        await this.addtocart.click()
        await this.page.goBack()
    }
    async check(){
        await this.checkthecart.click()
        const print=await this.checkthecart.textContent()
        console.log(print)
    }

}