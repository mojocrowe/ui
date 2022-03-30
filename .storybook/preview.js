import { ThemeProvider } from "@mui/material/styles";
import { addDecorator } from "@storybook/react";
import theme from "../src/utils/theme";

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
