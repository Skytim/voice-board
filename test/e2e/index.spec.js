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
  // it("Default Filter Button", async () => {
  //   await expect(page.title()).resolves.toMatch("Google");
  // });
});
