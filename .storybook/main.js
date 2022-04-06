module.exports = {
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: "@storybook/react",
  features: {
    emotionAlias: false,
  },
  staticDirs: ["./assets/fonts"],
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/stories/**/*.stories.mdx",
  ],
};
