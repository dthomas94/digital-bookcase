module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            screens: "./app/screens",
            components: "./app/components",
            api: "./api",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
