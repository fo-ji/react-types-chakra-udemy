import { memo, VFC } from 'react'
import { Image } from '@chakra-ui/image'
import { Box, Stack, Text } from '@chakra-ui/layout'

type Props = {
  imageUrl: string
  userName: string
  fullName: string
  onClick: () => void
}

const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, userName, fullName, onClick } = props

  return (
    <Box
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
      bg="white"
      borderRadius="10px"
      h="260px"
      onClick={onClick}
      p={4}
      shadow="md"
      w="260px"
    >
      <Stack textAlign="center">
        <Image
          alt={userName}
          borderRadius="full"
          boxSize="160px"
          m="auto"
          src={imageUrl}
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  )
})

export default UserCard
