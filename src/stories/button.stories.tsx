import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "../components/ui/button.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  component: Button,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  argTypes: {
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'default', 'lg', 'icon'],
      control: { type: 'select' },
    },
  },

  args: { 
    children: "Default"
   },
}

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    variant: "default",
    size: "sm",
    disabled: false,
    children: "Default",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    size: "lg",
    disabled: false,
    children: "Link",
  },
};

export const Fake: Story = {
  args: {
    asChild: true,
    children: <a href="/link">Link estilizado como botão</a>, 
    disabled: false,
  },
};