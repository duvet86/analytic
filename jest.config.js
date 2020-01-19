module.exports = {
  resolver: require.resolve("jest-pnp-resolver"),
  roots: ["<rootDir>/packages"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.css$": "<rootDir>/__mocks__/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)":
      "<rootDir>/__mocks__//fileTransform.js"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  testMatch: [
    "<rootDir>/packages/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/packages/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  testURL: "http://localhost",
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  modulePaths: ["<rootDir>/packages/app/src", "<rootDir>/packages/common/src"],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "@mis-common/(.*)": "<rootDir>/packages/common/src/$1"
  },
  collectCoverageFrom: ["packages/**/*.{ts,tsx}", "!packages/**/*.d.ts"],
  setupFiles: ["react-app-polyfill/jsdom"],
  testEnvironment: "jest-environment-jsdom-fourteen",
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
};
