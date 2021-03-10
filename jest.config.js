module.exports =
  process.env.DEPLOY_ENV === "E2E"|| process.env.DEPLOY_ENV === "E2EGH_PAGES"
    ? { preset: "jest-puppeteer" }
    : {
        moduleNameMapper: {
          "^@/(.*)$": "<rootDir>/$1",
          "^~/(.*)$": "<rootDir>/$1",
          "^vue$": "vue/dist/vue.common.js"
        },
        moduleFileExtensions: ["js", "vue", "json"],
        transform: {
          "^.+\\.js$": "babel-jest",
          ".*\\.(vue)$": "vue-jest"
        },
        collectCoverage: true,
        collectCoverageFrom: [
          "<rootDir>/components/**/*.vue",
          "<rootDir>/pages/**/*.vue"
        ],
        testPathIgnorePatterns:["/node_modules/", "<rootDir>/test/e2e/"]
      };
