import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Modal",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

/** 
    Documentation of the Modal
 */
export const Default: Story = {};
