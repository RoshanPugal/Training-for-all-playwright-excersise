import { test } from "@playwright/test";
import * as XLSX from "xlsx";
import { FlipkartPage } from "../flipcart/FlipkartPage";


interface ProductData {
  product_name: string;
}

test("Fetch Flipkart product price from Excel data", async ({ page }) => {
  // Read product from Excel
  const workbook = XLSX.readFile("tests/exceldata/productname.xlsx");
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json<ProductData>(sheet);
  const productName = data[0].product_name as string;

  const flipkart = new FlipkartPage(page);
  await flipkart.gotoHome();
  await flipkart.openTShirtCategory();
  await flipkart.getProductPrice(productName);

  const price = await flipkart.getProductPrice(productName);
  if (price) {
    console.log(`✅ Product: ${productName}`);
    console.log(`💰 Price: ${price}`);
  } else {
    console.log(`❌ Price not found for product: ${productName}`);
  }
});
