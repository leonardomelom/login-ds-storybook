import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export function Checkbox(props: CheckboxProps){

  return (
    <CheckboxPrimitive.Root 
      className='w-6 h-6 p-[2px] bg-gray-800 rounded' {...props}>
      <CheckboxPrimitive.Indicator asChild>
        <Check 
        weight='bold' 
        className='h-5 w-5 text-cyan-500'/>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )

}