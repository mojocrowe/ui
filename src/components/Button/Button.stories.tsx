import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

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

// export const TertiarySmall = Template.bind({});
// TertiarySmall.args = {
//   children: "TertiarySmall",
//   color: "tertiary",
//   loading: false,
//   size: "small",
//   variant: "contained",
// };

// export const TertiaryMedium = Template.bind({});
// TertiaryMedium.args = {
//   children: "Tertiary Medium",
//   color: "tertiary",
//   loading: false,
//   size: "medium",
//   variant: "contained",
// };

// export const TertiaryLarge = Template.bind({});
// TertiaryLarge.args = {
//   children: "Tertiary Large",
//   color: "tertiary",
//   loading: false,
//   size: "large",
//   variant: "contained",
// };

export const WarningSmall = Template.bind({});
WarningSmall.args = {
  children: "Warning Small",
  color: "warning",
  loading: false,
  size: "small",
  variant: "contained",
};

export const WarningMedium = Template.bind({});
WarningMedium.args = {
  children: "Warning Medium",
  color: "warning",
  loading: false,
  size: "medium",
  variant: "contained",
};

export const WarningLarge = Template.bind({});
WarningLarge.args = {
  children: "Warning Large",
  color: "warning",
  loading: false,
  size: "large",
  variant: "contained",
};

export const ErrorSmall = Template.bind({});
ErrorSmall.args = {
  children: "Error Small",
  color: "error",
  loading: false,
  size: "small",
  variant: "contained",
};

export const ErrorMedium = Template.bind({});
ErrorMedium.args = {
  children: "Error Medium",
  color: "error",
  loading: false,
  size: "medium",
  variant: "contained",
};

export const ErrorLarge = Template.bind({});
ErrorLarge.args = {
  children: "Error Large",
  color: "error",
  loading: false,
  size: "large",
  variant: "contained",
};

export const SuccessSmall = Template.bind({});
SuccessSmall.args = {
  children: "Success Small",
  color: "success",
  loading: false,
  size: "small",
  variant: "contained",
};

export const SuccessMedium = Template.bind({});
SuccessMedium.args = {
  children: "Success Medium",
  color: "success",
  loading: false,
  size: "medium",
  variant: "contained",
};

export const SuccessLarge = Template.bind({});
SuccessLarge.args = {
  children: "Success Large",
  color: "success",
  loading: false,
  size: "large",
  variant: "contained",
};

export const InfoSmall = Template.bind({});
InfoSmall.args = {
  children: "Info Small",
  color: "info",
  loading: false,
  size: "small",
  variant: "contained",
};

export const InfoMedium = Template.bind({});
InfoMedium.args = {
  children: "Info Medium",
  color: "info",
  loading: false,
  size: "medium",
  variant: "contained",
};

export const InfoLarge = Template.bind({});
InfoLarge.args = {
  children: "Info Large",
  color: "info",
  loading: false,
  size: "large",
  variant: "contained",
};
