import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
};

export const Default: StoryObj<ButtonComponent> = {
  args: {
    label: 'Hallo Welt',
  },
};

export const Secondary: StoryObj<ButtonComponent> = {
  args: {
    type: 'secondary',
    label: 'Ein sekundärer Button',
  },
};

export default meta;
