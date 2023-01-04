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
}