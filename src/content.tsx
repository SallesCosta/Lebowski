import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Flex } from '@chakra-ui/react'
import { Lista } from './hooks/hooks'
import { ChangeEventHandler, MouseEventHandler } from 'react'

type ContentProps = {
  value: string,
  index: number,
  Array: Lista[],
  onHandleDelete: (id: string) => void,
  onHandleChange: ChangeEventHandler<HTMLInputElement>,
  AddItem: MouseEventHandler<HTMLButtonElement> & MouseEventHandler<Element>,
  bgColor: string,
  color: string,
}

export function Content({
  index,
  Array,
  value,
  AddItem,
  onHandleChange,
  onHandleDelete,
  bgColor,
  color,
}: ContentProps) {
  return (
    <Box
      padding={6}
      w='100%'
      h='89vh'
      bg={bgColor}
      color={color}
    >
      <Flex>
        <Tabs isLazy w='100%'>
          <TabList>
            <Tab>01</Tab>
            <Tab>02</Tab>
            <Tab>03</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>01</TabPanel>
            <TabPanel>02</TabPanel>
            <TabPanel>03</TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  )
}
