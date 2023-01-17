import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from "./Text";


export default { 
  title: 'Components/Text',
  component:Text,
  args:{
    children: 'lorem impsun'
  },
  argTypes:{
    size:{
      options: [ 'sm', 'md', 'lg'],
      control:{
       type: 'radio'
      }
    }
  }
 } as Meta<TextProps>

 export const Small: StoryObj<TextProps> = {
  args:{
    size: 'sm'
  }
 }

 export const Medium: StoryObj<TextProps> = {}

 export const Large: StoryObj<TextProps> = {
  args:{
    size: 'lg'
  }
 }

 export const CustomComponent: StoryObj<TextProps> = {
  args:{
    asChild: true,
    children: (
      <p>p tag testing</p>
    )
  },
  argTypes:{
    children:{
      table:{
         disable: true
      }
    },
    asChild:{
      table:{
        disable: true
     }
    }
  }
 }
