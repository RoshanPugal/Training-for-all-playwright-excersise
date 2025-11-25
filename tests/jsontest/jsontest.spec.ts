import {test,Page} from "@playwright/test"
import { jsondata } from "./jsonreader.spec"

test("Verify the json test",async({page})=>{

    const data = jsondata()
    const print = data.users.find(a=> a.id ===1)

    console.log(print?.details.username,print?.details.Role);
    
})