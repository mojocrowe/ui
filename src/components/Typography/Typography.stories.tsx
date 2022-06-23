import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from "./Typography";

export default {
  component: Typography,
  title: "Components/Typography",
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const futuraTitleLarge = Template.bind({});
futuraTitleLarge.args = {
  children: "Futura Title Large",
  variant: "futuraTitleLarge",
};
export const futuraTitleMedium = Template.bind({});
futuraTitleMedium.args = {
  children: "Futura Title Medium",
  variant: "futuraTitleMedium",
};
export const futuraTitleSmall = Template.bind({});
futuraTitleSmall.args = {
  children: "Futura Title Small",
  variant: "futuraTitleSmall",
};
export const futuraTitleXSmall = Template.bind({});
futuraTitleXSmall.args = {
  children: "Futura Title X Small",
  variant: "futuraTitleXSmall",
};
