// Base
import * as styles from './DefaultLayout.styles'
import React, { ReactNode } from 'react';
// Components
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"


export function DefaultLayout({children}:{children: ReactNode}) {
  return (
    <>
      <Header />
      <styles.Main>{children}</styles.Main>
      <Navbar />
    </>
  )
}