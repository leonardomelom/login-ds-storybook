import { Logo } from './components/assets/logo'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import './styles/global.css'
import { Envelope, Lock } from 'phosphor-react'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'

export function App() {
 

  return (
  <div className=' w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'> 
  <header className='flex flex-col items-center'>
      <Logo/>

    <Heading size='lg' className='mt-4'>
      Ignite Lab</Heading>
    
    <Text size='lg' className='text-gray-400 mt-1'>Faça login para continuar</Text>
  </header>
  <form className='flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10'>
    <label htmlFor="email" className='flex flex-col gap-3'>
    <Text size='lg' className='text-gray-400 mt-1 font-semibold'>Digite seu e-mail para continuar</Text>
    <TextInput.Root>
      <TextInput.Icon>
        <Envelope/>
      </TextInput.Icon>

      <TextInput.Input type="email" id="email" placeholder='Digite seu e-mail'/>
    </TextInput.Root>
    </label>
    <label htmlFor="password" className='flex flex-col gap-3'>
    <Text size='lg' className='text-gray-400 mt-1 font-semibold'>Sua senha</Text>
    <TextInput.Root>
      <TextInput.Icon>
        <Lock/>
      </TextInput.Icon>

      <TextInput.Input type="password"
      id='password' placeholder='********'/>
    </TextInput.Root>
    </label>
    <label htmlFor="remember"
    className=' flex items-center gap-2'
    >
      <Checkbox id='remember'/>
      <Text size='sm' className='text-gray-200 '>Lembrar dispositivos por 90 dias</Text>
    </label>
    <Button type="submit" className='mt-4'>Entrar na plataforma</Button>
  </form>
  <footer className='flex flex-col items-center gap-4 mt-8'>
    <Text asChild size='sm'>
    <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
    </Text>
    <Text asChild size='sm'>
    <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possuí conta? Abra agora mesmo</a>
    </Text>
  </footer>
  </div>
  )
}


