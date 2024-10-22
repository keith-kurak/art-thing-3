// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  // will be fixed by https://github.com/expo/expo/pull/32203
  overrides: [
    {
      files: ["metro.config.js"],
      env: {
        node: true,
      },
    },
  ],
};
