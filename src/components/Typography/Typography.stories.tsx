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

export const h4PrimarySmall = Template.bind({});
h4PrimarySmall.args = {
  children: "Heading 4 Primary Small",
  variant: "h4PrimarySmall",
};
export const h4PrimaryLarge = Template.bind({});
h4PrimaryLarge.args = {
  children: "Heading 4 Primary Large",
  variant: "h4PrimaryLarge",
};

export const h4PrimaryHero = Template.bind({});
h4PrimaryHero.args = {
  children: "Heading 4 Primary Hero",
  variant: "h4PrimaryHero",
};

export const h5PrimarySmall = Template.bind({});
h5PrimarySmall.args = {
  children: "Heading 5 Primary Small",
  variant: "h5PrimarySmall",
};

export const h5PrimaryLarge = Template.bind({});
h5PrimaryLarge.args = {
  children: "Heading 5 Primary Large",
  variant: "h5PrimaryLarge",
};

export const h6PrimarySmall = Template.bind({});
h6PrimarySmall.args = {
  children: "Heading 6 Primary Small",
  variant: "h6PrimarySmall",
};

export const h6PrimaryLarge = Template.bind({});
h6PrimaryLarge.args = {
  children: "Heading 6 Primary Large",
  variant: "h6PrimaryLarge",
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

export const paragraph1Primary = Template.bind({});
paragraph1Primary.args = {
  children: "Paragraph 1 Primary",
  variant: "paragraph1Primary",
};

export const paragraph2Primary = Template.bind({});
paragraph2Primary.args = {
  children: "Paragraph 2 Primary",
  variant: "paragraph2Primary",
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
