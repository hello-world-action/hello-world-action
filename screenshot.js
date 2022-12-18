const puppeteer = require("puppeteer");

(async () => {
  // Set up Puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set the viewport to 800x600 to fit the contribution graph
  await page.setViewport({ width: 1200, height: 1000 });

  // Navigate to the contribution graph page
  await page.goto("https://github.com/hello-world-action", {
    waitUntil: "networkidle2",
  });

  // Wait for the graph to load
  await page.waitForSelector(".js-yearly-contributions");
  const element = await page.$(".js-yearly-contributions");
  // Take the screenshot
  await element.screenshot({ path: "contribution-graph.png" });

  // Close the browser
  await browser.close();
})();
