<<<<<<< HEAD
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
=======
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
>>>>>>> c88547d27a73cebc86a9a83f2f4b60d971890dfb
