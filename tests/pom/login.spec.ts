import{test} from "@playwright/test"
import { Loginpage } from "./login1.spec"

test("sample POM test",async({page})=>{
    const loginpage= new Loginpage(page)

    await loginpage.goto()
    await loginpage.usernameinput('student')
    await loginpage.passwordinput('Password123')
    await loginpage.loginbutton()
    await loginpage.sucessmessageinput()
})