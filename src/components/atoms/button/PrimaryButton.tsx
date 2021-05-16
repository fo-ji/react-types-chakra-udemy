import { memo, ReactNode, VFC } from 'react'
import { Button } from '@chakra-ui/button'

type Props = {
  children: ReactNode
  disabled?: boolean
  loading?: boolean
  onClick: () => void
}

// propsをオプショナルにして、受け取っていない場合のデフォルト値を定義しておく

const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props

  return (
    <Button
      _hover={{ opacity: 0.8 }}
      bg="teal.400"
      color="white"
      disabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  )
})

export default PrimaryButton
