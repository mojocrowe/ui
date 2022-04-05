import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from "./Typography";

export default {
  component: Typography,
  title: "Components/Typography",
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const h1Primary = Template.bind({});
h1Primary.args = {
  children: "Heading 1 Primary",
  variant: "h1Primary",
};

export const h2Primary = Template.bind({});
h2Primary.args = {
  children: "Heading 2 Primary",
  variant: "h2Primary",
};

export const h3Primary = Template.bind({});
h3Primary.args = {
  children: "Heading 3 Primary",
  variant: "h3Primary",
};

export const h4PrimaryRegular = Template.bind({});
h4PrimaryRegular.args = {
  children: "Heading 4 Primary Regular",
  variant: "h4PrimaryRegular",
};
export const h4PrimaryBold = Template.bind({});
h4PrimaryBold.args = {
  children: "Heading 4 Primary Bold",
  variant: "h4PrimaryBold",
};

export const h4PrimaryHero = Template.bind({});
h4PrimaryHero.args = {
  children: "Heading 4 Primary Hero",
  variant: "h4PrimaryHero",
};

export const h5PrimaryRegular = Template.bind({});
h5PrimaryRegular.args = {
  children: "Heading 5 Primary Regular",
  variant: "h5PrimaryRegular",
};

export const h5PrimaryBold = Template.bind({});
h5PrimaryBold.args = {
  children: "Heading 5 Primary Bold",
  variant: "h5PrimaryBold",
};

export const h6PrimaryRegular = Template.bind({});
h6PrimaryRegular.args = {
  children: "Heading 6 Primary Regular",
  variant: "h6PrimaryRegular",
};

export const h6PrimaryBold = Template.bind({});
h6PrimaryBold.args = {
  children: "Heading 6 Primary Bold",
  variant: "h6PrimaryBold",
};

export const h6PrimaryAction = Template.bind({});
h6PrimaryAction.args = {
  children: "Heading 6 Primary Action",
  variant: "h6PrimaryAction",
};

export const body1Primary = Template.bind({});
body1Primary.args = {
  children: "Body 1 Primary",
  variant: "body1Primary",
};

export const body2Primary = Template.bind({});
body2Primary.args = {
  children: "Body 2 Primary",
  variant: "body2Primary",
};

export const subtitle1Primary = Template.bind({});
subtitle1Primary.args = {
  children: "Subtitle 1 Primary",
  variant: "subtitle1Primary",
};

export const subtitle2Primary = Template.bind({});
subtitle2Primary.args = {
  children: "Subtitle 2 Primary",
  variant: "subtitle2Primary",
};

export const h1Secondary = Template.bind({});
h1Secondary.args = {
  children: "Heading 1 Secondary",
  variant: "h1Secondary",
};

export const h2Secondary = Template.bind({});
h2Secondary.args = {
  children: "Heading 2 Secondary",
  variant: "h2Secondary",
};

export const h3Secondary = Template.bind({});
h3Secondary.args = {
  children: "Heading 3 Secondary",
  variant: "h3Secondary",
};

export const h4Secondary = Template.bind({});
h4Secondary.args = {
  children: "Heading 4 Secondary",
  variant: "h4Secondary",
};

export const h5Secondary = Template.bind({});
h5Secondary.args = {
  children: "Heading 5 Secondary",
  variant: "h5Secondary",
};

export const h6Secondary = Template.bind({});
h6Secondary.args = {
  children: "Heading 6 Secondary",
  variant: "h6Secondary",
};

export const body1Secondary = Template.bind({});
body1Secondary.args = {
  children: "Body 1 Secondary",
  variant: "body1Secondary",
};

export const body2Secondary = Template.bind({});
body2Secondary.args = {
  children: "Body 2 Secondary",
  variant: "body2Secondary",
};

export const h1Tertiary = Template.bind({});
h1Tertiary.args = {
  children: "Heading 1 Tertiary",
  variant: "h1Tertiary",
};

export const h2Tertiary = Template.bind({});
h2Tertiary.args = {
  children: "Heading 2 Tertiary",
  variant: "h2Tertiary",
};

export const h3Tertiary = Template.bind({});
h3Tertiary.args = {
  children: "Heading 3 Tertiary",
  variant: "h3Tertiary",
};

export const h4Tertiary = Template.bind({});
h4Tertiary.args = {
  children: "Heading 4 Tertiary",
  variant: "h4Tertiary",
};

export const h5Tertiary = Template.bind({});
h5Tertiary.args = {
  children: "Heading 5 Tertiary",
  variant: "h5Tertiary",
};

export const h6Tertiary = Template.bind({});
h6Tertiary.args = {
  children: "Heading 6 Tertiary",
  variant: "h6Tertiary",
};

export const body1Tertiary = Template.bind({});
body1Tertiary.args = {
  children: "Body 1 Tertiary",
  variant: "body1Tertiary",
};

export const body2Tertiary = Template.bind({});
body2Tertiary.args = {
  children: "Body 2 Tertiary",
  variant: "body2Tertiary",
};
