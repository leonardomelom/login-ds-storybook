import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from "./TextInput";
import { Envelope } from 'phosphor-react'

export default { 
  title: 'Components/TextInput',
  component:TextInput.Root,
  args:{
    children:[
      <TextInput.Icon>
      <Envelope className=''/>
      </TextInput.Icon>,
    <TextInput.Input placeholder='Type your email adress'/>
    ],
   },
    argTypes:{
      children:{
        table:{
           disable: true
        }
      },
    }
 } as Meta<TextInputRootProps>

 export const Default: StoryObj<TextInputRootProps> = {}

export const WhitoutIcon: StoryObj<TextInputRootProps> = {
  args:{
    children:
    <TextInput.Input placeholder='Type your email adress'/>
   },
}
