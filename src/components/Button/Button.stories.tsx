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
  variant: "contained",
  size: "small",
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  children: "Primary Medium",
  color: "primary",
  variant: "contained",
  size: "medium",
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  children: "Primary Large",
  color: "primary",
  variant: "contained",
  size: "large",
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  children: "Secondary Small",
  color: "secondary",
  variant: "contained",
  size: "small",
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  children: "Secondary Medium",
  color: "secondary",
  variant: "contained",
  size: "medium",
};
export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  children: "Secondary Large",
  color: "secondary",
  variant: "contained",
  size: "large",
};
