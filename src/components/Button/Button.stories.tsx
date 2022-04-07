import Button from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ClearAllIcon from "@mui/icons-material/ClearAll";

export default {
  component: Button,
  title: "Components/Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: "Primary Small",
  color: "primary",
  loading: false,
  size: "small",
  variant: "contained",
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  children: "Primary Medium",
  color: "primary",
  loading: false,
  size: "medium",
  variant: "contained",
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  children: "Primary Large",
  color: "primary",
  loading: false,
  size: "large",
  variant: "contained",
};

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  children: "Primary Icon",
  color: "primary",
  loading: false,
  size: "large",
  startIcon: <ClearAllIcon />,
  variant: "contained",
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  children: "Secondary Small",
  color: "secondary",
  loading: false,
  size: "small",
  variant: "contained",
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  children: "Secondary Medium",
  color: "secondary",
  loading: false,
  size: "medium",
  variant: "contained",
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  children: "Secondary Large",
  color: "secondary",
  loading: false,
  size: "large",
  variant: "contained",
};

export const SecondaryIcon = Template.bind({});
SecondaryIcon.args = {
  children: "Secondary Icon",
  color: "secondary",
  endIcon: <ClearAllIcon />,
  loading: false,
  size: "large",
  variant: "contained",
};

export const TertiarySmall = Template.bind({});
TertiarySmall.args = {
  children: "TertiarySmall",
  color: "tertiary",
  loading: false,
  size: "small",
  variant: "outlined",
};

export const TertiaryMedium = Template.bind({});
TertiaryMedium.args = {
  children: "Tertiary Medium",
  color: "tertiary",
  loading: false,
  size: "medium",
  variant: "outlined",
};

export const TertiaryLarge = Template.bind({});
TertiaryLarge.args = {
  children: "Tertiary Large",
  color: "tertiary",
  loading: false,
  size: "large",
  variant: "outlined",
};

export const TertiaryIcon = Template.bind({});
TertiaryIcon.args = {
  children: "Tertiary Icon",
  color: "tertiary",
  loading: false,
  size: "large",
  startIcon: <ClearAllIcon />,
  variant: "outlined",
};

export const ErrorSmall = Template.bind({});
ErrorSmall.args = {
  children: "Error Small",
  color: "error",
  loading: false,
  size: "small",
  variant: "outlined",
};

export const ErrorMedium = Template.bind({});
ErrorMedium.args = {
  children: "Error Medium",
  color: "error",
  loading: false,
  size: "medium",
  variant: "outlined",
};

export const ErrorLarge = Template.bind({});
ErrorLarge.args = {
  children: "Error Large",
  color: "error",
  loading: false,
  size: "large",
  variant: "outlined",
};

export const ErrorIcon = Template.bind({});
ErrorIcon.args = {
  children: "Error Icon",
  color: "error",
  endIcon: <ClearAllIcon />,
  loading: false,
  size: "large",
  startIcon: <ClearAllIcon />,
  variant: "outlined",
};
