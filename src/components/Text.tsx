<<<<<<< HEAD
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg',
  children: ReactNode,
  asChild?: boolean
}

export function Text({size = 'md', children, asChild}: TextProps){
  const Comp = asChild ? Slot : 'span'
  return <Comp 
  className={clsx(
    "text-gray-100 font-sans",{
    "text-xs": size === 'sm',
    "text-md": size === 'md',
    "text-lg": size === 'lg',
  }
  )}>
    {children}
    </Comp>
=======
import { clsx } from 'clsx';


export interface TextProps {
 size?: 'sm' | 'md' | 'lg';
 children: string
}
export function Text({size= 'md', children}: TextProps){
  return(
    <h1 
    className={
      clsx(
      "text-gray-100 font-sans"),
      {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
    }}>{children}</h1>
  )
>>>>>>> c88547d27a73cebc86a9a83f2f4b60d971890dfb
}