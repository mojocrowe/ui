import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from "./Typography";

export default {
  component: Typography,
  title: "Components/Typography",
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const h1 = Template.bind({});
h1.args = {
  children: "Heading 1 Primary",
  variant: "h1Primary",
  align: "right",
};

export const h2 = Template.bind({});
h2.args = {
  children: "Heading 2 Secondary",
  variant: "h2Secondary",
  align: "center",
};
