describe("VoiceBoard", () => {
  beforeAll(async () => {
    if (process.env.DEPLOY_ENV === "E2EGH_PAGES") {
      await page.goto("https://skytim.github.io/voice-board/");
    } else {
      await page.goto("http://localhost:3000/");
    }
  });
  it('should be titled "VoiceBoard"', async () => {
    await expect(page.title()).resolves.toMatch("VoiceBoard");
  });
  it("Default Order Button", async () => {
    await page.waitForSelector(".nav .nav-pills");
    const text = await page.$eval(
      "div > div.nav > ul:nth-child(1) > li:nth-child(2) > a",
      element => {
        return element.textContent;
      }
    );
    expect(text).toBe('發佈時間');
  });

  it("Default Filter Button", async () => {
    await page.waitForSelector(".nav .nav-pills");
    const text = await page.$eval(
      "div > div.nav > ul:nth-child(2) > li:nth-child(2) > a",
      element => {
        return element.textContent;
      }
    );
    expect(text).toBe('不限');
  });
});
