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
  children: "Text",
  color: "primary",
  loading: false,
  size: "small",
  variant: "contained",
};

export const PrimarySmallIcon = Template.bind({});
PrimarySmallIcon.args = {
  children: "Text",
  color: "primary",
  endIcon: <ClearAllIcon />,
  loading: false,
  size: "small",
  startIcon: <ClearAllIcon />,
  variant: "contained",
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  children: "Text",
  color: "primary",
  loading: false,
  size: "medium",
  variant: "contained",
};

export const PrimaryMediumIcon = Template.bind({});
PrimaryMediumIcon.args = {
  children: "Text",
  color: "primary",
  endIcon: <ClearAllIcon />,
  loading: false,
  size: "medium",
  startIcon: <ClearAllIcon />,
  variant: "contained",
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  children: "Text",
  color: "primary",
  loading: false,
  size: "large",
  variant: "contained",
};

export const PrimaryLargeIcon = Template.bind({});
PrimaryLargeIcon.args = {
  children: "Text",
  color: "primary",
  endIcon: <ClearAllIcon />,
  loading: false,
  size: "large",
  startIcon: <ClearAllIcon />,
  variant: "contained",
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  children: "Text",
  color: "secondary",
  loading: false,
  size: "small",
  variant: "contained",
};

export const SecondarySmallIcon = Template.bind({});
SecondarySmallIcon.args = {
  children: "Text",
  color: "secondary",
  endIcon: <ClearAllIcon />,
  loading: false,
  size: "small",
  startIcon: <ClearAllIcon />,
  variant: "contained",
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  children: "Text",
  color: "secondary",
  loading: false,
  size: "medium",
  variant: "contained",
};

export const SecondaryMediumIcon = Template.bind({});
SecondaryMediumIcon.args = {
  children: "Text",
  color: "secondary",
  endIcon: <ClearAllIcon />,
  loading: false,
  size: "medium",
  startIcon: <ClearAllIcon />,
  variant: "contained",
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  children: "Text",
  color: "secondary",
  loading: false,
  size: "large",
  variant: "contained",
};

export const SecondaryLargeIcon = Template.bind({});
SecondaryLargeIcon.args = {
  children: "Text",
  color: "secondary",
  endIcon: <ClearAllIcon />,
  loading: false,
  size: "large",
  startIcon: <ClearAllIcon />,
  variant: "contained",
};

export const TertiarySmall = Template.bind({});
TertiarySmall.args = {
  children: "Text",
  color: "tertiary",
  loading: false,
  size: "small",
  variant: "outlined",
};

export const TertiarySmallIcon = Template.bind({});
TertiarySmallIcon.args = {
  children: "Text",
  color: "tertiary",
  endIcon: <ClearAllIcon />,
  loading: false,
  size: "small",
  startIcon: <ClearAllIcon />,
  variant: "contained",
};

export const TertiaryMedium = Template.bind({});
TertiaryMedium.args = {
  children: "Text",
  color: "tertiary",
  loading: false,
  size: "medium",
  variant: "outlined",
};

export const TertiaryMediumIcon = Template.bind({});
TertiaryMediumIcon.args = {
  children: "Text",
  color: "tertiary",
  endIcon: <ClearAllIcon />,
  loading: false,
  size: "medium",
  startIcon: <ClearAllIcon />,
  variant: "contained",
};

export const TertiaryLarge = Template.bind({});
TertiaryLarge.args = {
  children: "Text",
  color: "tertiary",
  loading: false,
  size: "large",
  variant: "outlined",
};

export const TertiaryLargeIcon = Template.bind({});
TertiaryLargeIcon.args = {
  children: "Text",
  color: "tertiary",
  endIcon: <ClearAllIcon />,
  loading: false,
  size: "large",
  startIcon: <ClearAllIcon />,
  variant: "outlined",
};

export const ErrorSmall = Template.bind({});
ErrorSmall.args = {
  children: "Text",
  color: "error",
  loading: false,
  size: "small",
  variant: "outlined",
};

export const ErrorSmallIcon = Template.bind({});
ErrorSmallIcon.args = {
  children: "Text",
  color: "error",
  endIcon: <ClearAllIcon />,
  loading: false,
  size: "small",
  startIcon: <ClearAllIcon />,
  variant: "outlined",
};

export const ErrorMedium = Template.bind({});
ErrorMedium.args = {
  children: "Text",
  color: "error",
  loading: false,
  size: "medium",
  variant: "outlined",
};

export const ErrorMediumIcon = Template.bind({});
ErrorMediumIcon.args = {
  children: "Text",
  color: "error",
  endIcon: <ClearAllIcon />,
  loading: false,
  size: "medium",
  startIcon: <ClearAllIcon />,
  variant: "outlined",
};

export const ErrorLarge = Template.bind({});
ErrorLarge.args = {
  children: "Text",
  color: "error",
  loading: false,
  size: "large",
  variant: "outlined",
};

export const ErrorLargeIcon = Template.bind({});
ErrorLargeIcon.args = {
  children: "Text",
  color: "error",
  endIcon: <ClearAllIcon />,
  loading: false,
  size: "large",
  startIcon: <ClearAllIcon />,
  variant: "outlined",
};
