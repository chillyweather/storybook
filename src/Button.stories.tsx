import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

/**  
 something about Primary button
*/
export const Primary: Story = {
    args: {
        variant: "primary",
        onClick: () => {},
    },
};


/**  
 something about Secondary button
*/
export const Secondary: Story = {
  args: {
    variant: "secondary",
    onClick: () => {},
  },
};

export const Group: Story = {
  render: () => (
    <div>
      <Button variant="primary" onClick={() => {}} />
      <Button variant="secondary" onClick={() => {}} />
    </div>
  ),
};
