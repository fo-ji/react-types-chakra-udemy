import { memo, ReactNode, VFC } from 'react'
import Header from '../organisms/layout/Header'

type Props = {
  children: ReactNode // タグで囲った要素を型定義する場合、ReactNodeで定義する
}

const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props

  return (
    <>
      <Header />
      {children}
    </>
  )
})

export default HeaderLayout
