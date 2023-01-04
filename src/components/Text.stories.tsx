import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from '@storybook/react'
export default{
  title: 'Components/Text',
  component: Text,
  args:{
    children: 'Lorem Ipsum',
  }
} as Meta<TextProps>

export const Default: StoryObj = {}

export const Small: StoryObj = {
  args:{
    children: 'Lorem Ipsum small',
    size: 'sm'
  }
}

export const Large: StoryObj = {
  args:{
    children: 'Lorem Ipsum',
    size: 'lg'
  }
}