export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/tests/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
};
