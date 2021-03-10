module.exports =
  process.env.DEPLOY_ENV === "E2EGH_PAGES"
    ? {}
    : {
        launch: {
          dumpio: true,
          headless: false
        },
        browser: "chromium",
        browserContext: "default"
      };
