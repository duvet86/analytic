module.exports = {
  resolver: require.resolve("jest-pnp-resolver"),
  roots: ["<rootDir>/packages"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  testURL: "http://localhost",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePaths: [
    "<rootDir>/packages/root/src",
    "<rootDir>/packages/shared-components/src"
  ],
  moduleNameMapper: {
    "^.+\\.css$": "identity-obj-proxy",
    "^.+\\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.ts",
    "typeface-roboto": "<rootDir>/__mocks__/fileMock.ts",
    "@trimble-shared-components/(.*)":
      "<rootDir>/packages/shared-components/src/$1"
  },
  collectCoverageFrom: ["packages/**/*.{ts,tsx}", "!packages/**/*.d.ts"]
};
