import { Locator, Page } from "@playwright/test";

export class FlipkartPage {
  readonly page: Page;
  getprice:Locator

  constructor(page: Page) {
    this.page = page;
    this.getprice=this.page.locator("//a[contains(text(),'Regular Fit Striped')]/following-sibling::a/child::div/child::div")
  }

  async gotoHome() {
    await this.page.goto("https://www.flipkart.com/");
    // Close login popup if it appears
    const closeBtn = this.page.locator("button", { hasText: "✕" });
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
    }
  }

  async openTShirtCategory() {
    await this.page.locator("//div[text()='T-Shirt, Shirt...']").click();
  }


  async getProductPrice(productName:string){
    const price=await this.getprice.textContent()
    console.log(`Price of ${productName}`,price)
    if (await this.getprice.isVisible()){
      return price
    }
      return this.getprice
  }
}
