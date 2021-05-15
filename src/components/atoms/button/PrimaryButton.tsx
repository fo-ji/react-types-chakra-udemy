import { memo, ReactNode, VFC } from 'react'
import { Button } from '@chakra-ui/button'

type Props = {
  children: ReactNode
}

const PrimaryButton: VFC<Props> = memo((props) => {
  const { children } = props

  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
      {children}
    </Button>
  )
})

export default PrimaryButton
