import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from 'button-lib';

const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
  render: (args: any) => ({
    props: {
      type: args.type,
      label: args.label,
      disabled: args.disabled,
      size: args.size,
    },
    template: `<lib-button [type]="type" [label]="label" [disabled]="disabled"/>`
  }),
  argTypes: {
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
};
export default meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    type: 'button',
    label: 'Primary Button',
    disabled: false,
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    type: 'button',
    label: 'Disabled Button',
    disabled: true,
    size: 'large',
  },
};

