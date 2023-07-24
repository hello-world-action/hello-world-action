const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1250, height: 1000 });

  await page.goto("https://github.com/hello-world-action", {
    waitUntil: "networkidle2",
  });

  await page.waitForSelector(".js-yearly-contributions");
  const element = await page.$(".js-yearly-contributions");
  await element.screenshot({ path: "contribution-graph.png" });

  await browser.close();
})();
