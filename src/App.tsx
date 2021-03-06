import { Box, useColorModeValue } from '@chakra-ui/react'
import { Header } from './header'
import { Footer } from './footer'
import { Content } from './content'
import { useHooks } from 'hooks/hooks'
import { ContextProvider } from './context/context'

export function App() {
  const bgColor = useColorModeValue('gray.50', 'withealpha.50')
  const color = useColorModeValue('gray.600', 'withealpha.400')

  const {
    handleChange,
    handleDelete,
    AddItem,
    value,
    Array,
    index,
  } = useHooks()
  return (
    <Box>
      <ContextProvider>
        <Header color={color} />
        <Content
          bgColor={bgColor}
          color={color}
          index={index}
          Array={Array}
          value={value}
          AddItem={AddItem}
          onHandleChange={handleChange}
          onHandleDelete={handleDelete}
        />
        <Footer color={color} />
      </ContextProvider>
    </Box>
  )
}
