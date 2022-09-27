// Base
import * as styles from './TitleNavLayout.styles'
import React, { ReactNode } from 'react';
// Components
import TitleHeader from '../../components/TitleHeader/TitleHeader'
import Navbar from '../../components/Navbar/Navbar'

export function TitleNavLayout({title, children}: {title: string, children: ReactNode}) {
  return (
    <>
      <TitleHeader title={ title } />
      <styles.Main>{children}</styles.Main>
      <Navbar />
    </>
  )
}
