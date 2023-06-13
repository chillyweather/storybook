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
 * SVG picture element with a fill color generated randomly on click.
 */
export const Default: Story = {};
