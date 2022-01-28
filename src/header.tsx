import { Box, Center, HStack, Text } from '@chakra-ui/react'
import { useBooks } from './context/context'

type HeaderProps = {
  color: string,
}

export function Header({ color }: HeaderProps) {
const {books} = useBooks()
  return (
    <>
      <Box
        h='60px'
        bgGradient='linear(to-r, teal.500, green.200)'
        color={color}
      >
        <HStack>
          <Center><Text>Header: {books}</Text></Center>
        </HStack>
      </Box>
    </>
  )
}
