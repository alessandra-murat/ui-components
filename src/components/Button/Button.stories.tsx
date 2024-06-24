import React from "react";
import { Button } from "./index";
import type { Meta, StoryObj, StoryFn } from "@storybook/react";

import { ButtonTextProps } from "./ButtonText";
import { ButtonIconProps } from "./ButtonIcon";

import { ButtonProps } from "./ButtonRoot";
export default {
  title: "Components/Button",
  component: Button.Root,
  parameters: {
    docs: {
      page: "./Button.mdx",
    },
    layout: "centered",
  },
  argTypes: {
    variant: {
      description: "Estilo de botão",
      control: { type: "select" },
    },
    size: {
      description: "Tamanho de botão: sm, md e lg",
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
      table: {
        defaultValue: { summary: "md" },
      },
    },
    shape: {
      description: "Formato de botão: square e rounded",
      options: ["square", "rounded"],
      control: { type: "radio" },
      table: {
        defaultValue: { summary: "square" },
      },
      defaultValue: "square",
    },
    disabled: {
      description: "Define se o botão está desativado",
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
} as Meta;

type Story = StoryObj<ButtonProps | ButtonTextProps | ButtonIconProps>;

const Template: StoryFn = (args) => (
  <>
    <Button.Root {...args}>
      <Button.Text text={args.text || "Button"} />
    </Button.Root>
  </>
);

export const Default = Template.bind({});
Default.args = {
  variant: "filled",
  size: "md",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  size: "md",
};

export const Borderless = Template.bind({});
Borderless.args = {
  variant: "borderless",
  size: "md",
  shape: "square",
  text: "Teste Button",
};

export const IconLeft: Story = {
  args: {
    size: "md",
    text: "Button",
  },
  render: (args: any) => (
    <Button.Root {...args}>
      <Button.Icon name="FaAngleLeft" />
      <Button.Text text={args.text} />
    </Button.Root>
  ),
};
export const IconRight: Story = {
  args: {
    size: "md",
    text: "Button",
  },
  render: (args: any) => (
    <Button.Root {...args}>
      <Button.Text text={args.text} />
      <Button.Icon name="FaAngleRight" />
    </Button.Root>
  ),
};
export const OnlyIcon: Story = {
  args: {
    size: "md",
    text: "Button",
  },
  render: (args: any) => (
    <Button.Root {...args}>
      <Button.Icon name="FaUser" />
    </Button.Root>
  ),
};
export const AllSizes: Story = {
  args: {
    size: "md",
    text: "Styles Button",
  },
  parameters: {
    docsOnly: true, // Mostra o story apenas na documentação
  },
  render: (args: any) => (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Button.Root {...args}>
          <Button.Text text={args.text} />
        </Button.Root>
        <Button.Root variant={"outlined"} {...args}>
          <Button.Text text={args.text} />
        </Button.Root>
        <Button.Root disabled="true" {...args}>
          <Button.Text text={args.text} />
        </Button.Root>
        <Button.Root variant={"borderless"} {...args}>
          <Button.Text text={args.text} />
        </Button.Root>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Button.Root {...args}>
          <Button.Icon name="FaAngleLeft" />
          <Button.Text text={args.text} />
        </Button.Root>
        <Button.Root variant={"outlined"} {...args}>
          <Button.Icon name="FaAngleLeft" />
          <Button.Text text={args.text} />
        </Button.Root>
        <Button.Root variant={"outlined"} disabled {...args}>
          <Button.Icon name="FaAngleLeft" />
          <Button.Text text={args.text} />
        </Button.Root>
        <Button.Root variant={"borderless"} {...args}>
          <Button.Icon name="FaAngleLeft" />
          <Button.Text text={args.text} />
        </Button.Root>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Button.Root {...args}>
          <Button.Text text={args.text} />
          <Button.Icon name="FaAngleRight" />
        </Button.Root>
        <Button.Root variant={"outlined"} {...args}>
          <Button.Text text={args.text} />
          <Button.Icon name="FaAngleRight" />
        </Button.Root>
        <Button.Root variant={"outlined"} disabled {...args}>
          <Button.Text text={args.text} />
          <Button.Icon name="FaAngleRight" />
        </Button.Root>
        <Button.Root variant={"borderless"} {...args}>
          <Button.Text text={args.text} />
          <Button.Icon name="FaAngleRight" />
        </Button.Root>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Button.Root {...args}>
          <Button.Icon name="FaUser" />
        </Button.Root>
        <Button.Root variant={"outlined"} {...args}>
          <Button.Icon name="FaUser" />
        </Button.Root>
        <Button.Root disabled {...args}>
          <Button.Icon name="FaUser" />
        </Button.Root>
        <Button.Root variant={"borderless"} {...args}>
          <Button.Icon name="FaUser" />
        </Button.Root>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Button.Root shape={"rounded"} {...args}>
          <Button.Icon name="FaUser" />
        </Button.Root>
        <Button.Root variant={"outlined"} shape={"rounded"} {...args}>
          <Button.Icon name="FaUser" />
        </Button.Root>
        <Button.Root shape={"rounded"} disabled {...args}>
          <Button.Icon name="FaUser" />
        </Button.Root>
        <Button.Root variant={"borderless"} shape={"rounded"} {...args}>
          <Button.Icon name="FaUser" />
        </Button.Root>
      </div>
    </div>
  ),
};
